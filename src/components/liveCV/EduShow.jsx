import { GiGraduateCap } from "react-icons/gi";
import ShowItem from "../utils/ShowItem";
import Typography from "@mui/material/Typography";
import { Stack, Box } from "@mui/material";

export default function EduShow({ eduList }) {
  return (
    <Box className="show-div">
      <Stack direction={"row"} className="show-header">
        {<GiGraduateCap />}
        <Typography variant={"h5"} component={"h4"}>
          Education
        </Typography>
      </Stack>
      <Stack className="show-list">
        {eduList.map((item) => (
          <ShowItem type="edu" key={item.id} item={item} />
        ))}
      </Stack>
    </Box>
  );
}
