import "./CVheader.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function CVheader({ infoData }) {
  return (
    <section className="CVheader flex-row">
      <div className="CVheader-title">
        {infoData.name && <h1 className="name">{infoData.name}</h1>}

        {infoData.title && (
          <h2 className="title">{infoData.title.toUpperCase()}</h2>
        )}
      </div>
      <div className="CVheader-info flex-column">
        {infoData.email && (
          <p>
            {infoData.email} {<MdOutlineEmail color="var(--main-color)" />}
          </p>
        )}

        {infoData.phone && (
          <p>
            {infoData.phone} {<FiPhone color="var(--main-color)" />}
          </p>
        )}

        {infoData.location && (
          <p>
            {infoData.location}
            {<IoLocationOutline color="var(--main-color)" />}
          </p>
        )}
      </div>
    </section>
  );
}
