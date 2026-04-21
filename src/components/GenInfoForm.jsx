import '../styles/GenInfoForm.css'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function GenInfoForm() {
    return (
        <form action="" className="gen-info-form grid-row">
            <section className="nameInput-div flex-column">
                <label htmlFor="name-input"> Full Name</label>
                <div className="input-div flex-row">
                    <IoPersonOutline />
                    <input type="text" id="name-input" placeholder="Viet Nguyen" required/>
                </div>
            </section>
            <section className="emailInput-div flex-column">
                <label htmlFor="email-input">Email Address</label>
                <div className="input-div flex-row">
                    <MdOutlineEmail />
                    <input type="email" id="email-input" placeholder="viet.nguyen@webdev.com" required/>
                </div>
            </section>
            <section className="phoneInput-div flex-column">
                <label htmlFor="phone-input">Phone Number</label>
                <div className="input-div flex-row">
                    <FiPhone />
                    <input type="text" id="phone-input" placeholder="(+49) 123 456 7890"/>
                </div>
            </section>
            <section className="locationInput-div flex-column">
                <label htmlFor="location-input">Location</label>
                <div className="input-div flex-row">
                    <IoLocationOutline />
                    <input type="text" id="location-input" placeholder="Greifswald, Germany"/>
                </div>
            </section>
        </form>
    )
}