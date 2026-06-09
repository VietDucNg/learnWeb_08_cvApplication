import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function EntryItem({
  type,
  item,
  delItem,
  handleRef,
  setOpenEntryForm,
}) {
  const { id, degreeType, degree, uni, from, to, position, company } = item;
  const eduPrimary = `${degreeType} ${degreeType && degree && "in"} ${degree}`;
  const workPrimary = `${position}`;
  const place = type == "edu" ? uni : company;

  return (
    <ListItem
      onClick={() => setOpenEntryForm(item.id)}
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 1,
        ":hover": { cursor: "pointer" },
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => delItem(id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar ref={handleRef} sx={{ cursor: "pointer" }}>
        <DragIndicatorIcon />
      </ListItemAvatar>
      <ListItemText
        primary={type == "edu" ? eduPrimary : workPrimary}
        secondary={`${place} ${from} ${(from || to) && "-"} ${to}`}
        sx={{
          "& .MuiListItemText-secondary": {
            color: "text.primary",
          },
        }}
      />
    </ListItem>
  );
}
