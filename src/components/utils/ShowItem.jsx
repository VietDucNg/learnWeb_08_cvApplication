import Typography from "@mui/material/Typography";
import { Stack, Box } from "@mui/material";

export default function ShowItem({ type, item }) {
  function eduTitle() {
    return (
      <>
        <strong>{item.degreeType}</strong>
        {item.degreeType && item.degree && " in "}
        {item.degree}
      </>
    );
  }

  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "space-between", gap: 1 }}
      >
        <Box>
          {type == "edu" ? (
            eduTitle()
          ) : (
            <Typography
              color="primary"
              component={"h5"}
              sx={{ fontWeight: "bold" }}
            >
              {item.position}
            </Typography>
          )}
          <Typography sx={{ fontStyle: "italic" }}>
            {type == "edu" ? item.uni : item.company}
          </Typography>
        </Box>

        <Box>
          <Typography>
            {item.from} {(item.from || item.to) && "-"} {item.to}
          </Typography>
          <Typography sx={{ color: "rgb(255, 255, 255, 0.5)" }}>
            {item.location}
          </Typography>
        </Box>
      </Stack>
      {type == "work" && (
        <Typography sx={{ mt: 1, pl: 1, whiteSpace: "pre-line" }}>
          {item.role}
        </Typography>
      )}
    </Box>
  );
}
