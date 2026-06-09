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
  const [openEntryForm, setOpenEntryForm] = useState(null);

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
              backgroundColor: "background.paper",
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
        setOpenEntryForm={setOpenEntryForm}
      />
      {openEntryForm && (
        <NewEntryForm
          type={type}
          setOpenEntryForm={setOpenEntryForm}
          entryList={entryList}
          setEntryList={setEntryList}
        />
      )}
    </Box>
  );
}
