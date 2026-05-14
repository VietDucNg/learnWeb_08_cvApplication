import "./EntryDiv.css";
import EntryList from "./EntryList";
import Badge from "@mui/material/Badge";

export default function EntryDiv({ initialList }) {
  return (
    <section className="EntryDiv">
      <h5>
        EDUCATION{" "}
        <Badge
          badgeContent={4}
          sx={{ "& .MuiBadge-badge": { backgroundColor: "var(--main-color)" } }}
        >
          {" "}
        </Badge>
      </h5>
      <EntryList initialList={initialList} />
    </section>
  );
}
