import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Typography from "@mui/material/Typography";
import { Box, InputAdornment, InputLabel, TextField } from "@mui/material";

export default function AboutFieldDiv({ register }) {
  return (
    <Box>
      <InputLabel sx={{ color: "text.primary", mb: 1 }} htmlFor="about-input">
        About
      </InputLabel>
      <TextField
        sx={{ color: "text.primary" }}
        variant="outlined"
        id="about-input"
        multiline
        rows={8}
        placeholder="Self-taught web developer with a background in geospatial analysis and a box-to-box midfielder in spirit. Passionate about building user-friendly web applications, especially those involving maps, spatial data, and sleek UI design. Turning “it works on my machine” into production-ready applications. Outside of coding, I enjoy football, making long shots and beautiful tackles, and occasionally pressing high like it’s the 90th minute of a World Cup final."
        name="about"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <InfoOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
        {...register("about")}
      />
    </Box>
  );
}
