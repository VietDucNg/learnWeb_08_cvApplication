import "./EduShowItem.css";

export default function EduShowItem({ eduItem }) {
  return (
    <div className="EduShowItem flex-row">
      <div>
        <strong>{eduItem.degreeType}</strong>
        {eduItem.degreeType && eduItem.degree && " in "}
        {eduItem.degree}
        <br />
        <em>{eduItem.uni}</em>
      </div>

      <div>
        <p>
          {eduItem.from} {(eduItem.from || eduItem.to) && "-"} {eduItem.to}
        </p>
        <p className="eduItem-location">{eduItem.location}</p>
      </div>
    </div>
  );
}
