import { useState } from "react";
import "./EntryDiv.css";
import EntryList from "./EntryList";
import Badge from "@mui/material/Badge";
import NewEntryBtn from "./NewEntryBtn";
import NewEntryForm from "./NewEntryForm";
import Typography from "@mui/material/Typography";

export default function EntryDiv({
  type,
  entryList,
  setEntryList,
  NewEntryBtnTitle,
  NewEntryBtnDescription,
}) {
  const [isNeuEntryFormOpen, setIsNeuEntryFormOpen] = useState(false);

  return (
    <section className="EntryDiv">
      <header className="flex-row">
        <Typography variant="h6" component={"h2"}>
          {type == "edu" ? "EDUCATION" : "WORK EXPERIENCE"}
        </Typography>
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
        type={type}
        entryList={entryList}
        setEntryList={setEntryList}
      />
      <NewEntryBtn
        type={type}
        NewEntryBtnTitle={NewEntryBtnTitle}
        NewEntryBtnDescription={NewEntryBtnDescription}
        setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
      />
      {isNeuEntryFormOpen && (
        <NewEntryForm
          type={type}
          setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
          entryList={entryList}
          setEntryList={setEntryList}
        />
      )}
    </section>
  );
}
