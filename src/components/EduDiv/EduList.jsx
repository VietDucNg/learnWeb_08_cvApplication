import { useState } from "react";
import List from "@mui/material/List";
import EduItem from "./EduItem";
import "./EduList.css";

import { useSortable } from "@dnd-kit/react/sortable";
import { move } from "@dnd-kit/helpers";

const initialEduList = [
  {
    id: crypto.randomUUID(),
    type: "M.Sc.",
    degree: "Coding Perfectionism",
    uni: "University of Early-Bird Debugging",
    from: 2020,
    to: 2023,
  },
  {
    id: crypto.randomUUID(),
    type: "B.Sc. ",
    degree: "90-Minute Box-to-Box Engine",
    uni: "Midfield Football Academy",
    from: 2015,
    to: 2019,
  },
];

export default function InteractiveList() {
  const [eduList, setEduList] = useState(initialEduList);

  function delEduItem(id) {
    const newEduList = eduList.filter((item) => item.id !== id);
    setEduList(newEduList);
  }

  function Sortable({ item, index, delEduItem }) {
    const { ref, handleRef } = useSortable({ id: item.id, index });
    return (
      <div ref={ref}>
        <EduItem eduItem={item} delEduItem={delEduItem} handleRef={handleRef} />
      </div>
    );
  }

  return (
    <List className="EduList flex-column">
      {eduList.map((eduItem, index) => (
        <Sortable
          key={eduItem.id}
          item={eduItem}
          index={index}
          delEduItem={delEduItem}
        />
      ))}
    </List>
  );
}
