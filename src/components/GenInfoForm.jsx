import "../styles/GenInfoForm.css";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import isEmail from "validator/lib/isEmail";

const NAME_REGEX = /^[\p{L}][\p{L} '-]{1,50}$/u;

export default function GenInfoForm() {
  // deal with focus style for input-div
  const [focused, setFocused] = useState(null);

  function setFocus(e, input) {
    setFocused(input);
    e.currentTarget.querySelector("input")?.focus();
  }

  // hide things on outside click
  const formRef = useRef(null);
  const locationInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!formRef.current?.contains(e.target)) {
        setFocused(null);
      }

      if (!locationInputRef.current?.contains(e.target)) {
        setShowAddressSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // validation
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerOptions = {
    name: {
      required: "*This field is required",
      minLength: {
        value: 2,
        message: "Name is too short",
      },
      maxLength: {
        value: 50,
        message: "Name is too long",
      },
      pattern: {
        value: NAME_REGEX,
        message: "Enter a valid name",
      },
    },
    email: {
      required: "*This field is required",
      validate: (value) => isEmail(value) || "Enter a valid email",
    },
    phone: {
      validate: (value) =>
        !value || isValidPhoneNumber(value, "DE") || "Invalid phone number",
    },
  };

  function submitFunc(data) {
    console.log(data);
  }

  // address photon autocomplete
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const locationValue = watch("location");

  useEffect(() => {
    if (isSelecting) {
      setIsSelecting(false);
      return;
    }

    if (!locationValue || locationValue.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://photon.komoot.io/api/?q=${encodeURIComponent(locationValue)}&limit=5`,
        );

        const data = await res.json();

        const results = data.features.map((f) => ({
          label: f.properties.name,
          city: f.properties.city,
          country: f.properties.country,
        }));

        setAddressSuggestions(results);
        setShowAddressSuggestions(true);
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [locationValue]);

  function selectLocation(item) {
    const value = `${item.label || ""}, ${item.city || ""}, ${item.country || ""}`;
    setIsSelecting(true);
    setValue("location", value, { shouldValidate: true });
    setShowAddressSuggestions(false);
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(submitFunc)}
      className="genInfo-form grid-row"
    >
      <section className="field-div flex-column">
        <label htmlFor="name-input"> Full Name</label>
        <div
          className={`input-div flex-row 
                ${focused === "name" ? "focus" : ""}
                ${errors.name ? "invalid" : watch("name") ? "valid" : ""}`}
          onClick={(e) => setFocus(e, "name")}
        >
          <IoPersonOutline />
          <input
            type="text"
            id="name-input"
            placeholder="Viet Nguyen"
            name="name"
            {...register("name", registerOptions.name)}
          />
        </div>
        <small className="error">{errors.name?.message}</small>
      </section>

      <section className="field-div flex-column">
        <label htmlFor="email-input">Email Address</label>
        <div
          className={`input-div flex-row 
                    ${focused === "email" ? "focus" : ""}
                    ${errors.email ? "invalid" : watch("email") ? "valid" : ""}`}
          onClick={(e) => setFocus(e, "email")}
        >
          <MdOutlineEmail />
          <input
            type="email"
            id="email-input"
            placeholder="viet.nguyen@webdev.com"
            name="email"
            {...register("email", registerOptions.email)}
          />
        </div>
        <small className="error">{errors.email?.message}</small>
      </section>

      <section className="field-div flex-column">
        <label htmlFor="phone-input">Phone Number</label>
        <div
          className={`input-div flex-row 
                    ${focused === "phone" ? "focus" : ""}
                    ${errors.phone ? "invalid" : watch("phone") ? "valid" : ""}`}
          onClick={(e) => setFocus(e, "phone")}
        >
          <FiPhone />
          <input
            type="text"
            id="phone-input"
            placeholder="+49 123 456 7890"
            name="phone"
            {...register("phone", registerOptions.phone)}
          />
        </div>
        <small className="error">{errors.phone?.message}</small>
      </section>

      <section className="location-field-div field-div flex-column">
        <label htmlFor="location-input">Location</label>
        <div
          ref={locationInputRef}
          className={`input-div flex-row ${focused === "location" ? "focus" : ""}`}
          onClick={(e) => setFocus(e, "location")}
        >
          <IoLocationOutline />
          <input
            type="text"
            id="location-input"
            placeholder="Greifswald, Germany"
            {...register("location")}
          />
        </div>
        {showAddressSuggestions && addressSuggestions.length > 0 && (
          <ul className="addressSuggestions">
            {addressSuggestions.map((address, idx) => (
              <li key={idx} onClick={() => selectLocation(address)}>
                {address.label}, {address.city}, {address.country}
              </li>
            ))}
          </ul>
        )}
      </section>
    </form>
  );
}
