import Button from "@mui/material/Button";

export default function SaveBtn({ id }) {
  return (
    <Button type="submit" form={id} variant="contained">
      Save
    </Button>
  );
}
