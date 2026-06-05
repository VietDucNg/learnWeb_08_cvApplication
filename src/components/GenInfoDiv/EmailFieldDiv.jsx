import { Box, InputAdornment, InputLabel, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import isEmail from "validator/lib/isEmail";

const registerOptions = {
  required: "*This field is required",
  validate: (value) => isEmail(value) || "Enter a valid email",
};

export default function EmailFieldDiv({ errors, register }) {
  return (
    <Box>
      <InputLabel sx={{ color: "text.primary", mb: 1 }} htmlFor="email-input">
        Email Address
      </InputLabel>
      <TextField
        variant="outlined"
        fullWidth
        id="email-input"
        placeholder="viet.nguyen@webdev.com"
        error={errors.email}
        helperText={errors.email?.message || " "}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        {...register("email", registerOptions)}
      />
    </Box>
  );
}
