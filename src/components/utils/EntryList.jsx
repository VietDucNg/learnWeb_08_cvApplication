import { useState } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import EntryItem from "./EntryItem";
import List from "@mui/material/List";
import "./EntryList.css";

export default function EntryList({ initialList }) {
  const [entryList, setEntryList] = useState(initialList);

  function delItem(id) {
    const newEntryList = List.filter((item) => item.id !== id);
    setEntryList(newEntryList);
  }

  function Sortable({ item, index, delItem }) {
    const { ref, handleRef } = useSortable({ id: item.id, index });
    return (
      <div ref={ref}>
        <EntryItem item={item} delItem={delItem} handleRef={handleRef} />
      </div>
    );
  }

  return (
    <List className={`flex-column EntryList`}>
      {entryList.map((item, index) => (
        <Sortable key={item.id} item={item} index={index} delItem={delItem} />
      ))}
    </List>
  );
}
