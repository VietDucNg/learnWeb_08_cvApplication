import { useState } from "react";
import EntryList from "./EntryList";
import Badge from "@mui/material/Badge";
import NewEntryBtn from "./NewEntryBtn";
import NewEntryForm from "./NewEntryForm";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

export default function EntryDiv({
  type,
  entryList,
  setEntryList,
  NewEntryBtnTitle,
  NewEntryBtnDescription,
}) {
  const [isNeuEntryFormOpen, setIsNeuEntryFormOpen] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        px: 3,
        py: 2,
        borderRadius: 2,
        maxWidth: "800px",
        minWidth: "300px",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          p: 1,
          borderBottom: "1px solid",
          borderBottomColor: "divider",
          gap: 2,
          alignItems: "center",
        }}
      >
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
      </Stack>
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
    </Box>
  );
}
