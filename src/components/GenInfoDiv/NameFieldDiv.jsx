import { InputAdornment, InputLabel, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

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

export default function NameFieldDiv({ errors, register }) {
  return (
    <Stack>
      <InputLabel sx={{ color: "text.primary", mb: 1 }} htmlFor="name-input">
        Full Name *
      </InputLabel>
      <TextField
        variant="outlined"
        id="name-input"
        placeholder="Viet Nguyen"
        error={errors.name}
        helperText={errors.name?.message || " "}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        {...register("name", registerOptions)}
      />
    </Stack>
  );
}
