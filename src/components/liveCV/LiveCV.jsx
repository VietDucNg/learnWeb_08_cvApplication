import CVheader from "./CVheader";
import AboutShow from "./AboutShow";
import EduShow from "./EduShow";
import WorkShow from "./WorkShow";
import { Box } from "@mui/material";

export default function LiveCV({ infoData, eduList, workList }) {
  return (
    <Box
      sx={{
        maxWidth: "1500px",
        flex: "2",
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        "& .show-div": {
          padding: " 50px 50px 0 50px",
        },
        "& .show-header": {
          alignItems: "center",
          gap: 1,
          borderBottom: "2px solid",
          borderBottomColor: "custom.cvHeaderBackground",
          mb: 3,
          pb: 1,
        },
        "& .show-list": { gap: 4 },
      }}
    >
      <CVheader infoData={infoData} />
      {infoData.about && <AboutShow infoData={infoData} />}
      {eduList.length > 0 && <EduShow eduList={eduList} />}
      {workList.length > 0 && <WorkShow workList={workList} />}
    </Box>
  );
}
