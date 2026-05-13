import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { MdDragIndicator } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./EduItem.css";

export default function EduItem({ eduItem, delEduItem, handleRef }) {
  const { id, type, degree, uni, from, to } = eduItem;

  return (
    <ListItem
      className="EduItem"
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => delEduItem(id)}
        >
          <MdDelete color="var(--font-color)" />
        </IconButton>
      }
    >
      <ListItemAvatar ref={handleRef} sx={{ cursor: "pointer" }}>
        <MdDragIndicator />
      </ListItemAvatar>
      <ListItemText
        primary={`${type} in ${degree}`}
        secondary={`${uni} ${from} - ${to}`}
        sx={{
          "& .MuiListItemText-secondary": {
            color: "var(--font-color)",
          },
        }}
      />
    </ListItem>
  );
}
