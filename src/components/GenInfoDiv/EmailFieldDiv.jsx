import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
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
    <Stack className="field-div">
      <label htmlFor="email-input">
        <Typography>Email Address</Typography>
      </label>
      <Stack
        direction={"row"}
        className={`input-div 
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
      </Stack>
      <small className="error">{errors.email?.message}</small>
    </Stack>
  );
}
