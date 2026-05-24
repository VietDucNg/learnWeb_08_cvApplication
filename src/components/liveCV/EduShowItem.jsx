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
          {eduItem.from} - {eduItem.to}
        </p>
        <p className="eduItem-location">{eduItem.location}</p>
      </div>
    </div>
  );
}

//   degreeType: "M.Sc.",
//   degree: "Coding Perfectionism",
//   uni: "University of Early-Bird Debugging",
//   from: 2020,
//   to: 2023,
