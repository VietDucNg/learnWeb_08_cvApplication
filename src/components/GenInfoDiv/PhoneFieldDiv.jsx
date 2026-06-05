import { FiPhone } from "react-icons/fi";
import Typography from "@mui/material/Typography";
import { isValidPhoneNumber } from "libphonenumber-js";
import Stack from "@mui/material/Stack";

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
    <Stack className="field-div">
      <label htmlFor="phone-input">
        <Typography>Phone Number</Typography>
      </label>
      <Stack
        direction={"row"}
        className={`input-div
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
      </Stack>
      <small className="error">{errors.phone?.message}</small>
    </Stack>
  );
}
