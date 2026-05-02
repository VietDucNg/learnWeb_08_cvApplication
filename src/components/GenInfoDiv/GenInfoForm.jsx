import "./GenInfoForm.css";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import NameFieldDiv from "./NameFieldDiv";
import EmailFieldDiv from "./EmailFieldDiv";
import PhoneFieldDiv from "./PhoneFieldDiv";
import LocationFieldDiv from "./LocationFieldDiv";
import SaveBtn from "./SaveBtn";

export default function GenInfoForm() {
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
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function submitFunc(data) {
    console.log(data);
  }

  return (
    <>
      <form
        ref={formRef}
        id="gen-info-form"
        onSubmit={handleSubmit(submitFunc)}
        className="genInfo-form grid-row"
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
      </form>
      <SaveBtn />
    </>
  );
}
