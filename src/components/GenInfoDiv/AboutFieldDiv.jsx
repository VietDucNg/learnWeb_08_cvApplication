import { AiOutlineProfile } from "react-icons/ai";
import Typography from "@mui/material/Typography";

export default function AboutFieldDiv({ focused, setFocus, register }) {
  return (
    <section className="field-div">
      <label htmlFor="about-input">
        <Typography>About</Typography>
      </label>
      <div
        className={`input-div flex-row ${focused === "about" ? "focus" : ""}`}
        onClick={(e) => setFocus(e, "about")}
      >
        <AiOutlineProfile />
        <textarea
          rows={8}
          type="about"
          id="about-input"
          placeholder="Self-taught web developer with a background in geospatial analysis and a box-to-box midfielder in spirit. Passionate about building user-friendly web applications, especially those involving maps, spatial data, and sleek UI design. Turning “it works on my machine” into production-ready applications. Outside of coding, I enjoy football, making long shots and beautiful tackles, and occasionally pressing high like it’s the 90th minute of a World Cup final."
          name="about"
          {...register("about")}
        ></textarea>
      </div>
    </section>
  );
}
