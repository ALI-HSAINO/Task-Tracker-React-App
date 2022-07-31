import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setTask] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setRemin] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    if (text === "" && day === "") {
      window.alert(`Please fill the required field`);
    } else {
      onAdd({ text, day, reminder });
    }
    setTask("");
    setDay("");
    setRemin(false);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Your Task"
          value={text}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="text"
          placeholder="Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setRemin(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save my task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
