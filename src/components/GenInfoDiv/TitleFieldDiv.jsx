import { Box, InputAdornment, InputLabel, TextField } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export default function TitleFieldDiv({ register }) {
  return (
    <Box sx={{ mb: "20px", gridColumn: "1/-1" }}>
      <InputLabel sx={{ color: "text.primary", mb: 1 }} htmlFor="title-input">
        Title
      </InputLabel>
      <TextField
        variant="outlined"
        fullWidth
        id="title-input"
        placeholder="WebGIS developer"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <WorkOutlineOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        {...register("title")}
      />
    </Box>
  );
}
