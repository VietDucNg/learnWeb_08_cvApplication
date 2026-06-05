import { isValidPhoneNumber } from "libphonenumber-js";
import { Box, InputAdornment, InputLabel, TextField } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const registerOptions = {
  validate: (value) =>
    !value || isValidPhoneNumber(value, "DE") || "Invalid phone number",
};

export default function PhoneFieldDiv({ errors, register }) {
  return (
    <Box>
      <InputLabel sx={{ color: "text.primary", mb: 1 }} htmlFor="phone-input">
        Phone Number
      </InputLabel>
      <TextField
        variant="outlined"
        fullWidth
        id="phone-input"
        placeholder="+49 123 456 7890"
        error={errors.phone}
        helperText={errors.phone?.message || " "}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        {...register("phone", registerOptions)}
      />
    </Box>
  );
}
