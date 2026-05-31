import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { MdDragIndicator, MdDelete } from "react-icons/md";
import "./EntryItem.css";

export default function EntryItem({ type, item, delItem, handleRef }) {
  const { id, degreeType, degree, uni, from, to, position, company, role } =
    item;
  const eduPrimary = `${degreeType} ${degreeType && degree && "in"} ${degree}`;
  const workPrimary = `${position}`;
  const place = type == "edu" ? uni : company;

  return (
    <ListItem
      className="EntryItem"
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => delItem(id)}>
          <MdDelete color="var(--font-color)" />
        </IconButton>
      }
    >
      <ListItemAvatar ref={handleRef} sx={{ cursor: "pointer" }}>
        <MdDragIndicator />
      </ListItemAvatar>
      <ListItemText
        primary={type == "edu" ? eduPrimary : workPrimary}
        secondary={`${place} ${from} ${(from || to) && "-"} ${to}`}
        sx={{
          "& .MuiListItemText-secondary": {
            color: "var(--font-color)",
          },
        }}
      />
    </ListItem>
  );
}
