import '../styles/GenInfoForm.css'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";


export default function GenInfoForm() {

    const [focused, setFocused] = useState(null);
    const formRef = useRef(null);

    function setFocus(e,input) {
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

    return (
        <form ref={formRef} className="genInfo-form grid-row">

            <section className="nameInput-div flex-column">
                <label htmlFor="name-input"> Full Name</label>
                <div className={`input-div flex-row ${focused === "name" ? "focus" : ""}`} onClick={(e) => setFocus(e, "name")} >
                    <IoPersonOutline />
                    <input type="text" id="name-input" placeholder="Viet Nguyen" required/>
                </div>
            </section>

            <section className="emailInput-div flex-column">
                <label htmlFor="email-input">Email Address</label>
                <div className={`input-div flex-row ${focused === "email" ? "focus" : ""}`} onClick={(e) => setFocus(e,"email")}>
                    <MdOutlineEmail />
                    <input type="email" id="email-input" placeholder="viet.nguyen@webdev.com" required/>
                </div>
            </section>

            <section className="phoneInput-div flex-column">
                <label htmlFor="phone-input">Phone Number</label>
                <div className={`input-div flex-row ${focused === "phone" ? "focus" : ""}`} onClick={(e) => setFocus(e,"phone")}>
                    <FiPhone />
                    <input type="text" id="phone-input" placeholder="(+49) 123 456 7890"/>
                </div>
            </section>

            <section className="locationInput-div flex-column">
                <label htmlFor="location-input">Location</label>
                <div className={`input-div flex-row ${focused === "location" ? "focus" : ""}`} onClick={(e) => setFocus(e, "location")}>
                    <IoLocationOutline />
                    <input type="text" id="location-input" placeholder="Greifswald, Germany"/>
                </div>
            </section>
        </form>
    )
}