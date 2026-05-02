import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function LocationFieldDiv({
  focused,
  setFocus,
  watch,
  setValue,
  register,
}) {
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const locationValue = watch("location");

  useEffect(() => {
    if (isSelected) {
      setIsSelected(false);
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
    setIsSelected(true);
    setValue("location", value, { shouldValidate: true });
    setShowAddressSuggestions(false);
  }

  //   hide address suggestions on outside click
  const locationInputRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!locationInputRef.current?.contains(e.target)) {
      setShowAddressSuggestions(false);
    }
  };

  useEffect(function () {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
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
  );
}
