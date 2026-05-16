import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "./NewEntryForm.css";
import ClearBtn from "./ClearBtn";
import CancelBtn from "./CancelBtn";
import SaveBtn from "./SaveBtn";

// datePicker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";

// MUI select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

export default function NewEntryForm({
  id,
  setIsNeuEntryFormOpen,
  entryList,
  setEntryList,
}) {
  const { register, handleSubmit, reset } = useForm();
  const [degreeType, setDegreeType] = useState("");
  const [fromDate, setFromDate] = useState(dayjs());
  const [toDate, setToDate] = useState(dayjs());

  function onSubmit(data) {
    const { place, title } = data;
    const newEntryList = { ...entryList, data };

    if (id === "NewEduEntryForm") {
      console.log(newEntryList);
    }
    // setEntryList(newEntryList);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id={id}
      className="NewEntryForm flex-column"
    >
      <TextField
        sx={TextFieldSx}
        id="place"
        label="School"
        variant="outlined"
        {...register("place")}
      />
      <div className="titleDiv flex-row">
        <FormControl
          variant="filled"
          sx={{
            border: "1px solid var(--line-break-color)",
            backgroundColor: "var(--section-background-color)",
            minWidth: "120px",
            flex: 0,
            borderRadius: "2px",
            "& svg": {
              color: "var(--font-color)",
            },
          }}
        >
          <InputLabel
            sx={{ color: "var(--font-color)" }}
            id="demo-simple-select-label"
          >
            Type
          </InputLabel>
          <Select
            sx={{ color: "var(--font-color)" }}
            labelId="demo-simple-select-label"
            id="degreeTypeSelect"
            value={degreeType}
            label="Type"
            onChange={(e) => setDegreeType(e.target.value)}
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"B.Sc."}>B.Sc. (Bachelor of Science)</MenuItem>
            <MenuItem value={"B.A."}>B.A. (Bachelor of Arts)</MenuItem>
            <MenuItem value={"M.Sc."}>M.Sc. (Master of Science)</MenuItem>
            <MenuItem value={"M.A."}>M.A. (Master of Arts)</MenuItem>
            <MenuItem value={"MBA"}>
              MBA (Master of Business Administration)
            </MenuItem>
            <MenuItem value={"Ph.D."}>Doctorate</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ ...TextFieldSx, flex: 1 }}
          id="title"
          label="Degree/ Title of study"
          variant="outlined"
          {...register("title")}
        />
      </div>
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
      <div className="newEntryFormBtnDiv flex-row">
        <ClearBtn onClick={reset} />
        <div className="newEntryFormBtnDiv-right flex-row">
          <CancelBtn
            reset={reset}
            setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
          />
          <SaveBtn id={id} onSubmit={handleSubmit(onSubmit)} />
        </div>
      </div>
    </form>
  );
}
