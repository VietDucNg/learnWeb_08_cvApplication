import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MdWorkOutline } from "react-icons/md";

export default function TitleFieldDiv({ focused, setFocus, register }) {
  return (
    <Box className="field-div">
      <label htmlFor="title-input">
        <Typography>Title</Typography>
      </label>
      <Stack
        direction={"row"}
        className={`input-div ${focused === "title" ? "focus" : ""}`}
        onClick={(e) => setFocus(e, "title")}
      >
        <MdWorkOutline />
        <input
          type="title"
          id="title-input"
          placeholder="WebGIS developer"
          name="title"
          {...register("title")}
        />
      </Stack>
    </Box>
  );
}
