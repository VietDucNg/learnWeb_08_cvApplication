import { useState } from "react";
import List from "@mui/material/List";
import EduItem from "./EduItem";

export default function InteractiveList() {
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

  const [eduList, setEduList] = useState(initialEduList);

  function delEduItem(id) {
    const newEduList = eduList.filter((item) => item.id !== id);
    setEduList(newEduList);
  }

  return (
    <List>
      {eduList.map((eduItem) => (
        <EduItem key={eduItem.id} eduItem={eduItem} delEduItem={delEduItem} />
      ))}
    </List>
  );
}
