import { useState } from "react";
import "./EntryDiv.css";
import EntryList from "./EntryList";
import Badge from "@mui/material/Badge";
import NewEntryBtn from "./NewEntryBtn";
import NewEntryForm from "./NewEntryForm";

export default function EntryDiv({
  entryList,
  setEntryList,
  NewEntryBtnTitle,
  NewEntryBtnDescription,
}) {
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
      <EntryList entryList={entryList} setEntryList={setEntryList} />
      <NewEntryBtn
        NewEntryBtnTitle={NewEntryBtnTitle}
        NewEntryBtnDescription={NewEntryBtnDescription}
        setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
      />
      {isNeuEntryFormOpen && (
        <NewEntryForm
          id={"NewEduEntryForm"}
          setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
          entryList={entryList}
          setEntryList={setEntryList}
        />
      )}
    </section>
  );
}
