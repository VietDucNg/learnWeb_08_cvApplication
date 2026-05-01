import { MdOutlineEmail } from "react-icons/md";
import isEmail from "validator/lib/isEmail";

const registerOptions = {
  required: "*This field is required",
  validate: (value) => isEmail(value) || "Enter a valid email",
};

export default function EmailFieldDiv({
  focused,
  setFocus,
  errors,
  watch,
  register,
}) {
  return (
    <section className="field-div flex-column">
      <label htmlFor="email-input">Email Address</label>
      <div
        className={`input-div flex-row 
                        ${focused === "email" ? "focus" : ""}
                        ${errors.email ? "invalid" : watch("email") ? "valid" : ""}`}
        onClick={(e) => setFocus(e, "email")}
      >
        <MdOutlineEmail />
        <input
          type="email"
          id="email-input"
          placeholder="viet.nguyen@webdev.com"
          name="email"
          {...register("email", registerOptions)}
        />
      </div>
      <small className="error">{errors.email?.message}</small>
    </section>
  );
}
