import EntryDiv from "../utils/EntryDiv";

const initialEduList = [
  {
    id: crypto.randomUUID(),
    degreeType: "M.Sc.",
    degree: "Coding Perfectionism",
    uni: "University of Early-Bird Debugging",
    from: 2020,
    to: 2023,
  },
  {
    id: crypto.randomUUID(),
    degreeType: "B.Sc. ",
    degree: "90-Minute Box-to-Box Engine",
    uni: "Midfield Football Academy",
    from: 2015,
    to: 2019,
  },
];

export default function EduDiv() {
  return (
    <EntryDiv
      initialList={initialEduList}
      NewEntryBtnTitle={"Add New Education"}
      NewEntryBtnDescription={"Degree, School, Period"}
    />
  );
}
