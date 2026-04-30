import "../styles/GenInfoForm.css";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const NAME_REGEX = /^[\p{L}][\p{L} '-]{1,29}$/u;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function GenInfoForm() {
  // // deal with focus style for input-div
  const [focused, setFocused] = useState(null);
  const formRef = useRef(null);

  function setFocus(e, input) {
    setFocused(input);
    e.currentTarget.querySelector("input")?.focus();
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!formRef.current.contains(e.target)) {
        setFocused(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // validation
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((oldState) => ({
      ...oldState,
      [name]: value,
    }));

    validateField(name, value);
  }

  function validateField(name, value) {
    let error = "";

    if (!value.trim()) {
      error = "*This field is required";
    } else {
      switch (name) {
        case "name":
          if (!NAME_REGEX.test(value)) {
            error = "Enter a valid name";
          }
          break;

        case "email":
          if (!EMAIL_REGEX.test(value)) {
            error = "Enter a valid email";
          }
          break;

        case "phone":
          const digits = value.replace(/\+/g, "");

          if (!value.match(/^\+?\d+$/)) {
            error = "Phone number can only contain digits, or start with +";
          } else if (digits.length < 8 || digits.length > 15) {
            error = "Phone number must be 8-15 digits";
          } else if (value.startsWith("+")) {
            if (!value.match(/^\+\d/)) {
              error = "Number cannot end with +. It must be followed by digits";
            } else if (value.match(/^\+0/)) {
              error =
                "When using international format (+), the first digit cannot be 0";
            }
          } else if (!value.match(/^0/)) {
            error = "Local numbers must start with 0";
          }
          break;
      }
    }

    setErrors((oldState) => ({
      ...oldState,
      [name]: error,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    Object.keys(values).forEach((key) => {
      const value = values[key];
      let error = "";

      if (!value.trim()) {
        error = "*This field is required";
      }

      // (you can reuse your switch logic here)

      newErrors[key] = error;
    });

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err);

    if (!hasError) {
      console.log("Form is valid", values);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="genInfo-form grid-row"
    >
      <section className="field-div flex-column">
        <label htmlFor="name-input"> Full Name</label>
        <div
          className={`input-div flex-row 
                ${focused === "name" ? "focus" : ""}
                ${errors.name ? "invalid" : values.name ? "valid" : ""}`}
          onClick={(e) => setFocus(e, "name")}
        >
          <IoPersonOutline />
          <input
            type="text"
            id="name-input"
            placeholder="Viet Nguyen"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <small className="error">{errors.name}</small>
      </section>

      <section className="field-div flex-column">
        <label htmlFor="email-input">Email Address</label>
        <div
          className={`input-div flex-row 
                    ${focused === "email" ? "focus" : ""}
                    ${errors.email ? "invalid" : values.email ? "valid" : ""}`}
          onClick={(e) => setFocus(e, "email")}
        >
          <MdOutlineEmail />
          <input
            type="email"
            id="email-input"
            placeholder="viet.nguyen@webdev.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <small className="error">{errors.email}</small>
      </section>

      <section className="field-div flex-column">
        <label htmlFor="phone-input">Phone Number</label>
        <div
          className={`input-div flex-row 
                    ${focused === "phone" ? "focus" : ""}
                    ${errors.phone ? "invalid" : values.phone ? "valid" : ""}`}
          onClick={(e) => setFocus(e, "phone")}
        >
          <FiPhone />
          <input
            type="text"
            id="phone-input"
            placeholder="(+49) 123 456 7890"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <small className="error">{errors.phone}</small>
      </section>

      <section className="field-div flex-column">
        <label htmlFor="location-input">Location</label>
        <div
          className={`input-div flex-row ${focused === "location" ? "focus" : ""}`}
          onClick={(e) => setFocus(e, "location")}
        >
          <IoLocationOutline />
          <input
            type="text"
            id="location-input"
            placeholder="Greifswald, Germany"
          />
        </div>
      </section>
    </form>
  );
}
