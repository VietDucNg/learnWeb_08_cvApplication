import { Stack, Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function CVheader({ infoData }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        backgroundColor: "custom.cvHeaderBackground",
        p: 6,
        justifyContent: "space-between",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        gap: 2,
      }}
    >
      <Box>
        {infoData.name && (
          <Typography sx={{ mb: 1 }} variant="h2" component="h2">
            {infoData.name}
          </Typography>
        )}

        {infoData.title && (
          <Typography variant="h5" component={"h3"}>
            {infoData.title}
          </Typography>
        )}
      </Box>
      <Stack sx={{ alignItems: "end", gap: 0.5 }}>
        {infoData.email && (
          <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
            {infoData.email}{" "}
            {<EmailOutlinedIcon fontSize="small" color="primary" />}
          </Stack>
        )}

        {infoData.phone && (
          <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
            {infoData.phone}
            {<LocalPhoneOutlinedIcon fontSize="small" color="primary" />}
          </Stack>
        )}

        {infoData.location && (
          <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
            {infoData.location}
            {<HomeOutlinedIcon fontSize="small" color="primary" />}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
