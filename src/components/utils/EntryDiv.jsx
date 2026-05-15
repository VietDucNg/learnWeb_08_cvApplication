import { useState } from "react";
import "./EntryDiv.css";
import EntryList from "./EntryList";
import Badge from "@mui/material/Badge";
import NewEntryBtn from "./NewEntryBtn";
import NewEntryForm from "./NewEntryForm";

export default function EntryDiv({
  initialList,
  NewEntryBtnTitle,
  NewEntryBtnDescription,
}) {
  const [entryList, setEntryList] = useState(initialList);
  const [isNeuEntryFormOpen, setIsNeuEntryFormOpen] = useState(false);

  return (
    <section className="EntryDiv">
      <header className="flex-row">
        <h5>EDUCATION</h5>
        <Badge
          badgeContent={entryList.length}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "var(--input-background-color)",
            },
          }}
        >
          {" "}
        </Badge>
      </header>
      <EntryList
        initialList={initialList}
        entryList={entryList}
        setEntryList={setEntryList}
      />
      <NewEntryBtn
        NewEntryBtnTitle={NewEntryBtnTitle}
        NewEntryBtnDescription={NewEntryBtnDescription}
        setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
      />
      {isNeuEntryFormOpen && (
        <NewEntryForm setIsNeuEntryFormOpen={setIsNeuEntryFormOpen} />
      )}
    </section>
  );
}
