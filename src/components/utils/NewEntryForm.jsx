import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "./NewEntryForm.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";

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

const slotPropsDatePicker = {
  textField: {
    sx: {
      color: "var(--line-break-color)",
      borderRadius: "5px",
      borderWidth: "1px",
      borderColor: "var(--line-break-color)",
      border: "1px solid",
      backgroundColor: "var(--section-background-color)",
      "& .MuiInputLabel-root, & svg, & span": {
        color: "var(--font-color)",
      },
    },
  },
};

const currentYear = dayjs();

function onSubmit(data) {
  console.log(data);
}

export default function NewEntryForm() {
  const { register, handleSubmit } = useForm();

  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());

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
        <div className="datePickerGroup flex-row">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={slotPropsDatePicker}
              label="From"
              name="fromDate"
              maxDate={currentYear}
              openTo="year"
              views={["year", "month"]}
              value={fromDate}
              onChange={(newDate) => setFromDate(newDate)}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={slotPropsDatePicker}
              label="To"
              name="toDate"
              maxDate={currentYear}
              openTo="year"
              views={["year", "month"]}
              value={toDate}
              onChange={(newDate) => setToDate(newDate)}
            />
          </LocalizationProvider>
        </div>
      </form>
    </section>
  );
}
