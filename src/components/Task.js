import { FaTimes } from "react-icons/fa";
const task = ({ text, day, id, reminder, deleteIt, setReminder }) => {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => setReminder(id)}
    >
      <h3>
        {text} <FaTimes style={FaStyling} onClick={() => deleteIt(id)} />
      </h3>
      <p>{day}</p>
    </div>
  );
};
const FaStyling = {
  color: "red",
  cursor: "Pointer",
};
export default task;
