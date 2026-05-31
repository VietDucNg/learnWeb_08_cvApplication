import EntryDiv from "../utils/EntryDiv";

export default function WorkDiv({ workList, setWorkList }) {
  return (
    <EntryDiv
      type={"work"}
      entryList={workList}
      setEntryList={setWorkList}
      NewEntryBtnTitle={"Add New Experience"}
      NewEntryBtnDescription={"Company, Role, Responsibilities"}
    />
  );
}
