import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { move } from "@dnd-kit/helpers";

import EntryItem from "./EntryItem";
import { Stack, Box } from "@mui/material";

export default function EntryList({ type, setEntryList, entryList }) {
  function delItem(id) {
    const newEntryList = entryList.filter((item) => item.id !== id);
    setEntryList(newEntryList);
  }

  function Sortable({ item, index, delItem }) {
    const { ref, handleRef } = useSortable({ id: item.id, index });
    return (
      <Box ref={ref}>
        <EntryItem
          type={type}
          item={item}
          delItem={delItem}
          handleRef={handleRef}
        />
      </Box>
    );
  }

  function handleDragEnd(event) {
    setEntryList((items) => move(items, event));
  }

  return (
    <Stack sx={{ gap: 1 }}>
      <DragDropProvider onDragOver={handleDragEnd}>
        {entryList.map((item, index) => (
          <Sortable key={item.id} item={item} index={index} delItem={delItem} />
        ))}
      </DragDropProvider>
    </Stack>
  );
}
