import GenInfoForm from "./GenInfoForm";
import Typography from "@mui/material/Typography";
import "./GenInfoDiv.css";
import { Box } from "@mui/material";

export default function GenInfoDiv({ setInfoData }) {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        px: 3,
        py: 2,
        borderRadius: 4,
        maxWidth: "800px",
        minWidth: "300px",
      }}
    >
      <Typography
        sx={{ p: 1, borderBottom: "1px solid", borderBottomColor: "divider" }}
        variant="h6"
        component={"h2"}
      >
        GENERAL INFORMATION
      </Typography>
      <GenInfoForm setInfoData={setInfoData} />
    </Box>
  );
}
