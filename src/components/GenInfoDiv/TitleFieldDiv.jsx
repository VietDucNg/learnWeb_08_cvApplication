import { MdWorkOutline } from "react-icons/md";

export default function TitleFieldDiv({ focused, setFocus, register }) {
  return (
    <section className="title-field-div field-div flex-column">
      <label htmlFor="title-input">Title</label>
      <div
        className={`input-div flex-row ${focused === "title" ? "focus" : ""}`}
        onClick={(e) => setFocus(e, "title")}
      >
        <MdWorkOutline />
        <input
          type="title"
          id="title-input"
          placeholder="WebGIS developer"
          name="title"
          {...register("title")}
        />
      </div>
    </section>
  );
}
