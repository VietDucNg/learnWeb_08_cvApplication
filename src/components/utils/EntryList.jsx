import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { move } from "@dnd-kit/helpers";

import EntryItem from "./EntryItem";
import List from "@mui/material/List";
import "./EntryList.css";

export default function EntryList({ type, setEntryList, entryList }) {
  function delItem(id) {
    const newEntryList = entryList.filter((item) => item.id !== id);
    setEntryList(newEntryList);
  }

  function Sortable({ item, index, delItem }) {
    const { ref, handleRef } = useSortable({ id: item.id, index });
    return (
      <div ref={ref}>
        <EntryItem
          type={type}
          item={item}
          delItem={delItem}
          handleRef={handleRef}
        />
      </div>
    );
  }

  function handleDragEnd(event) {
    setEntryList((items) => move(items, event));
  }

  return (
    <List className={`flex-column EntryList`}>
      <DragDropProvider onDragOver={handleDragEnd}>
        {entryList.map((item, index) => (
          <Sortable key={item.id} item={item} index={index} delItem={delItem} />
        ))}
      </DragDropProvider>
    </List>
  );
}
