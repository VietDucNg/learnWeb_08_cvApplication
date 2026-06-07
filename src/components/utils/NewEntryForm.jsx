import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ClearBtn from "./ClearBtn";
import CancelBtn from "./CancelBtn";
import SaveBtn from "./SaveBtn";

// datePicker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

// MUI select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

const TextFieldSx = {
  "& .MuiInputLabel-root": {
    color: "text.primary",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "background.paper",

    "& fieldset": {
      borderColor: "divider",
    },
    "& input, & textarea": {
      color: "text.primary",
    },
  },
};

const slotPropsDatePicker = {
  textField: {
    sx: {
      flex: "1",
      backgroundColor: "background.paper",
      "& fieldset": {
        borderColor: "divider",
      },
    },
  },
  desktopPaper: {
    sx: {
      backgroundColor: "background.paperSolid",
    },
  },
  mobilePaper: {
    sx: {
      backgroundColor: "background.paperSolid",
    },
  },
};

const currentYear = dayjs();

export default function NewEntryForm({
  type,
  setIsNeuEntryFormOpen,
  entryList,
  setEntryList,
}) {
  const { register, handleSubmit, reset, control } = useForm();

  function onSubmit(data) {
    const { place, title, degreeType, location, fromDate, toDate, role } = data;

    if (type === "edu") {
      const newEntryList = [
        ...entryList,
        {
          id: crypto.randomUUID(),
          degreeType: degreeType,
          degree: title,
          uni: place,
          location: location,
          from: fromDate ? fromDate.format("MMMM YYYY") : "",
          to: toDate ? toDate.format("MMMM YYYY") : "",
        },
      ];
      setEntryList(newEntryList);
    } else if (type === "work") {
      const newEntryList = [
        ...entryList,
        {
          id: crypto.randomUUID(),
          position: title,
          company: place,
          location: location,
          from: fromDate ? fromDate.format("MMMM YYYY") : "",
          to: toDate ? toDate.format("MMMM YYYY") : "",
          role: role,
        },
      ];
      setEntryList(newEntryList);
    }
    reset();
  }

  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        py: 2,
        px: 1,
        borderRadius: 1,
        gap: 2,
      }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      id={type}
    >
      <TextField
        sx={TextFieldSx}
        id="place"
        label={type == "edu" ? "School" : "Company Name"}
        variant="outlined"
        {...register("place")}
      />
      <Stack direction={"row"} sx={{ gap: 1, flexWrap: "wrap" }}>
        {type == "edu" && (
          <FormControl
            variant="filled"
            sx={{
              minWidth: "120px",
              flex: 0,
              borderRadius: "2px",
            }}
          >
            <InputLabel sx={{ color: "text.primary" }}>Type</InputLabel>
            <Controller
              name="degreeType"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <Select
                  variant="outlined"
                  sx={{
                    backgroundColor: "background.paper",
                    "& fieldset": {
                      borderColor: "divider",
                    },
                  }}
                  MenuProps={{
                    slotProps: {
                      paper: {
                        sx: {
                          backgroundColor: "background.paperSolid",
                        },
                      },
                    },
                  }}
                  label="Type"
                  {...field}
                >
                  <MenuItem value={""}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"B.Sc."}>
                    B.Sc. (Bachelor of Science)
                  </MenuItem>
                  <MenuItem value={"B.A."}>B.A. (Bachelor of Arts)</MenuItem>
                  <MenuItem value={"M.Sc."}>M.Sc. (Master of Science)</MenuItem>
                  <MenuItem value={"M.A."}>M.A. (Master of Arts)</MenuItem>
                  <MenuItem value={"MBA"}>
                    MBA (Master of Business Administration)
                  </MenuItem>
                  <MenuItem value={"Ph.D."}>Doctorate</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        )}
        <TextField
          sx={{ ...TextFieldSx, flex: 1 }}
          id="title"
          label={type == "edu" ? "Degree/ Title of study" : "Position Title"}
          variant="outlined"
          {...register("title")}
        />
      </Stack>

      <TextField
        sx={TextFieldSx}
        id="location"
        label="Location"
        variant="outlined"
        {...register("location")}
      />

      <Stack direction={"row"} sx={{ gap: 1, flexWrap: "wrap" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="fromDate"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                label="From"
                maxDate={currentYear}
                openTo="year"
                views={["year", "month"]}
                slotProps={slotPropsDatePicker}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="toDate"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                label="To"
                maxDate={currentYear}
                openTo="year"
                views={["year", "month"]}
                slotProps={slotPropsDatePicker}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </LocalizationProvider>
      </Stack>

      {type == "work" && (
        <TextField
          sx={TextFieldSx}
          id="role"
          label="Main Responsibilities"
          variant="outlined"
          multiline
          maxRows={5}
          {...register("role")}
        />
      )}

      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          borderTop: "1px solid",
          borderTopColor: "divider",
          pt: 2,
        }}
      >
        <ClearBtn onClick={reset} />
        <Stack direction={"row"} sx={{ gap: 1 }}>
          <CancelBtn
            reset={reset}
            setIsNeuEntryFormOpen={setIsNeuEntryFormOpen}
          />
          <SaveBtn id={type} onSubmit={handleSubmit(onSubmit)} />
        </Stack>
      </Stack>
    </Stack>
  );
}
