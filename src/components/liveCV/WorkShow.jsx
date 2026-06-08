import ShowItem from "../utils/ShowItem";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

export default function WorkShow({ workList }) {
  return (
    <Box className="show-div">
      <Stack direction={"row"} className="show-header">
        {<WorkHistoryIcon />}
        <Typography variant="h5" component="h4">
          Work Experience
        </Typography>
      </Stack>
      <Stack className="show-list">
        {workList.map((item) => (
          <ShowItem type="work" key={item.id} item={item} />
        ))}
      </Stack>
    </Box>
  );
}
