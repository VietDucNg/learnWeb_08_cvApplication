import "./GenInfoForm.css";
import { useState, useRef, useEffect } from "react";
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
  // focus style for input-div
  const [focused, setFocused] = useState(null);

  function setFocus(e, input) {
    setFocused(input);
    e.currentTarget.querySelector("input")?.focus();
  }

  // unfocus on outside click
  const formRef = useRef(null);

  function handleClickOutside(e) {
    if (!formRef.current?.contains(e.target)) {
      setFocused(null);
    }
  }

  useEffect(function () {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
        ref={formRef}
        id="gen-info-form"
        onSubmit={handleSubmit(submitFunc)}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(auto-fit, minmax(max(250px, 45%), 1fr))",
          gap: 1,
          mt: 2,
          "& .input-div": {
            backgroundColor: "custom.inputBackground",
            p: 1,
            borderRadius: 1,
            mt: 1,
            gap: 1,
          },
        }}
      >
        <NameFieldDiv
          focused={focused}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
          register={register}
        />
        <EmailFieldDiv
          focused={focused}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
          register={register}
        />
        <PhoneFieldDiv
          focused={focused}
          setFocus={setFocus}
          errors={errors}
          watch={watch}
          register={register}
        />
        <LocationFieldDiv
          focused={focused}
          setFocus={setFocus}
          watch={watch}
          setValue={setValue}
          register={register}
        />
        <TitleFieldDiv
          focused={focused}
          setFocus={setFocus}
          register={register}
        />
        <AboutFieldDiv
          focused={focused}
          setFocus={setFocus}
          register={register}
        />
      </Box>
      <Stack direction={"row"} sx={{ gap: 1 }}>
        <ClearBtn sx={{ flex: 1 }} onClick={reset} text={"Clear"} />
        <SaveBtn />
      </Stack>
    </>
  );
}
