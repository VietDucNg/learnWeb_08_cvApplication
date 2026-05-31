import EntryDiv from "../utils/EntryDiv";

export default function EduDiv({ eduList, setEduList }) {
  return (
    <EntryDiv
      type={"edu"}
      entryList={eduList}
      setEntryList={setEduList}
      NewEntryBtnTitle={"Add New Education"}
      NewEntryBtnDescription={"Degree, School, Period"}
    />
  );
}
