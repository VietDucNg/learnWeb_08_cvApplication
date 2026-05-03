import "./CVheader.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function CVheader({ name, email, phone, location }) {
  return (
    <section className="CVheader flex-row">
      <div className="CVheader-title">
        <h1 className="name">Viet Nguyen</h1>
        <h2 className="title">{"WebGIS developer".toUpperCase()}</h2>
      </div>
      <div className="CVheader-info flex-column">
        <p>email {<MdOutlineEmail color="var(--main-color)" />}</p>
        <p>phone {<FiPhone color="var(--main-color)" />}</p>
        <p>location {<IoLocationOutline color="var(--main-color)" />} </p>
      </div>
    </section>
  );
}
