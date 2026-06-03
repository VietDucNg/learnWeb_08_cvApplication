import { Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

export default function AboutShow({ infoData }) {
  return (
    <Box className="show-div">
      <Stack className="show-header" direction={"row"}>
        {<AssignmentIndIcon fontSize="16px" />}
        <Typography variant={"h5"} component={"h4"}>
          Intro
        </Typography>
      </Stack>
      <Box className="show-list">
        <Typography>{infoData.about}</Typography>
      </Box>
    </Box>
  );
}
