import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "./NewEntryForm.css";

const TextFieldSx = {
  "& .MuiInputLabel-root": {
    color: "var(--font-color)",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--section-background-color)",

    "& fieldset": {
      borderColor: "var(--line-break-color)",
    },
    "& input": {
      color: "var(--font-color)",
    },
  },
};

function onSubmit(data) {
  console.log(data);
}

export default function NewEntryForm() {
  const { register, handleSubmit } = useForm();

  return (
    <section className="newEntryDiv">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="NewEntryForm"
        className="NewEntryForm flex-column"
      >
        <TextField
          sx={TextFieldSx}
          id="place"
          label="School"
          variant="outlined"
          {...register("place")}
        />
        <TextField
          sx={TextFieldSx}
          id="title"
          label="Degree/ Title of study"
          variant="outlined"
          {...register("title")}
        />
      </form>
    </section>
  );
}
