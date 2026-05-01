import { FiPhone } from "react-icons/fi";
import { isValidPhoneNumber } from "libphonenumber-js";

const registerOptions = {
  validate: (value) =>
    !value || isValidPhoneNumber(value, "DE") || "Invalid phone number",
};

export default function PhoneFieldDiv({
  focused,
  setFocus,
  errors,
  watch,
  register,
}) {
  return (
    <section className="field-div flex-column">
      <label htmlFor="phone-input">Phone Number</label>
      <div
        className={`input-div flex-row 
                    ${focused === "phone" ? "focus" : ""}
                    ${errors.phone ? "invalid" : watch("phone") ? "valid" : ""}`}
        onClick={(e) => setFocus(e, "phone")}
      >
        <FiPhone />
        <input
          type="text"
          id="phone-input"
          placeholder="+49 123 456 7890"
          name="phone"
          {...register("phone", registerOptions)}
        />
      </div>
      <small className="error">{errors.phone?.message}</small>
    </section>
  );
}
