import Typography from "@mui/material/Typography";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { List, ListItem, Stack } from "@mui/material";

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
    <Stack sx={{ position: "relative" }} className="field-div">
      <label htmlFor="location-input">
        <Typography>Location</Typography>
      </label>
      <Stack
        direction={"row"}
        ref={locationInputRef}
        className={`input-div ${focused === "location" ? "focus" : ""}`}
        onClick={(e) => setFocus(e, "location")}
      >
        <IoLocationOutline />
        <input
          type="text"
          id="location-input"
          placeholder="Greifswald, Germany"
          {...register("location")}
        />
      </Stack>
      {showAddressSuggestions && addressSuggestions.length > 0 && (
        <List
          sx={{
            position: "absolute",
            backgroundColor: "background.paper",
            top: "70px",
            width: "100%",
            borderRadius: 1,
          }}
        >
          {addressSuggestions.map((address, idx) => (
            <ListItem
              sx={{ ":hover": { backgroundColor: "custom.inputBackground" } }}
              key={idx}
              onClick={() => selectLocation(address)}
            >
              {address.label}, {address.city}, {address.country}
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}
