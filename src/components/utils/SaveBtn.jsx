import Button from "@mui/material/Button";

export default function SaveBtn({ id }) {
  return (
    <Button
      type="submit"
      form={id}
      className="SaveBtn"
      variant="contained"
      sx={{
        color: "var(--font-color)",
        borderColor: "var(--main-color)",
        textTransform: "none",
        fontSize: "1rem",
      }}
    >
      Save
    </Button>
  );
}
