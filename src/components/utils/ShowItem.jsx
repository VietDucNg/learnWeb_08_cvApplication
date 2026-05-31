import "./ShowItem.css";

export default function ShowItem({ type, item }) {
  function eduTitle() {
    return (
      <>
        <strong>{item.degreeType}</strong>
        {item.degreeType && item.degree && " in "}
        {item.degree}
      </>
    );
  }

  return (
    <section className="ShowItem">
      <div className="ShowItem-top flex-row">
        <div>
          {type == "edu" ? eduTitle() : item.position}
          <br />
          <em>{type == "edu" ? item.uni : item.company}</em>
        </div>

        <div>
          <p>
            {item.from} {(item.from || item.to) && "-"} {item.to}
          </p>
          <p className="item-location">{item.location}</p>
        </div>
      </div>
      {type == "work" && <p>{item.role}</p>}
    </section>
  );
}
