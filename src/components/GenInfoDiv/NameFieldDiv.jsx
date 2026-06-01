import Typography from "@mui/material/Typography";
import { IoPersonOutline } from "react-icons/io5";

const NAME_REGEX = /^[\p{L}][\p{L} '-]{1,50}$/u;

const registerOptions = {
  required: "*This field is required",
  minLength: {
    value: 2,
    message: "Name is too short",
  },
  maxLength: {
    value: 50,
    message: "Name is too long",
  },
  pattern: {
    value: NAME_REGEX,
    message: "Enter a valid name",
  },
};

export default function NameFieldDiv({
  focused,
  setFocus,
  errors,
  watch,
  register,
}) {
  return (
    <section className="field-div flex-column">
      <label htmlFor="name-input">
        <Typography>Full Name</Typography>
      </label>
      <div
        className={`input-div flex-row 
                ${focused === "name" ? "focus" : ""}
                ${errors.name ? "invalid" : watch("name") ? "valid" : ""}`}
        onClick={(e) => setFocus(e, "name")}
      >
        <IoPersonOutline />
        <input
          type="text"
          id="name-input"
          placeholder="Viet Nguyen"
          name="name"
          {...register("name", registerOptions)}
        />
      </div>
      <small className="error">{errors.name?.message}</small>
    </section>
  );
}
