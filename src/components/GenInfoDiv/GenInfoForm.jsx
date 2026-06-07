import { useForm } from "react-hook-form";
import NameFieldDiv from "./NameFieldDiv";
import EmailFieldDiv from "./EmailFieldDiv";
import PhoneFieldDiv from "./PhoneFieldDiv";
import LocationFieldDiv from "./LocationFieldDiv";
import TitleFieldDiv from "./TitleFieldDiv";
import AboutFieldDiv from "./AboutFieldDiv";
import ClearBtn from "../utils/ClearBtn";
import SaveBtn from "./SaveBtn";
import { Box, Stack } from "@mui/material";

export default function GenInfoForm({ setInfoData }) {
  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // send infoData to App
  function submitFunc(data) {
    setInfoData(data);
  }

  return (
    <>
      <Box
        component={"form"}
        id="gen-info-form"
        onSubmit={handleSubmit(submitFunc)}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(auto-fit, minmax(max(250px, 45%), 1fr))",
          gap: 1,
          mt: 2,
          // input background
          "& .MuiInputBase-root": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <NameFieldDiv errors={errors} register={register} />
        <EmailFieldDiv errors={errors} register={register} />
        <PhoneFieldDiv errors={errors} register={register} />
        <LocationFieldDiv
          watch={watch}
          setValue={setValue}
          register={register}
        />
        <TitleFieldDiv register={register} />
        <AboutFieldDiv register={register} />
      </Box>
      <Stack direction={"row"} sx={{ gap: 1 }}>
        <ClearBtn sx={{ flex: 1 }} onClick={reset} text={"Clear"} />
        <SaveBtn />
      </Stack>
    </>
  );
}
