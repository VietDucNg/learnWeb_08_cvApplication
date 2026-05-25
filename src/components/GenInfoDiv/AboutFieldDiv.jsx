import { AiOutlineProfile } from "react-icons/ai";

export default function AboutFieldDiv({ focused, setFocus, register }) {
  return (
    <section className="field-div">
      <label htmlFor="about-input">About</label>
      <div
        className={`input-div flex-row ${focused === "about" ? "focus" : ""}`}
        onClick={(e) => setFocus(e, "about")}
      >
        <AiOutlineProfile />
        <input
          type="about"
          id="about-input"
          placeholder=""
          name="about"
          {...register("about")}
        />
      </div>
    </section>
  );
}
