import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  // Submit the from
  const onAdd = (task) => {
    const id = Date.now();
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteIt = (id) => {
    setTasks(
      tasks.filter((ele) => {
        return ele.id !== id;
      })
    );
  };
  // Set Reminder
  const setReminder = (id) => {
    setTasks(
      tasks.map((ele) =>
        ele.id === id ? { ...ele, reminder: !ele.reminder } : ele
      )
    );
  };
  return (
    <div className="container">
      <Header
        title="Tasks Tracker"
        color={show ? "red" : "green"}
        action={show ? "close" : "add"}
        click={() => setShow(!show)}
      />
      {show && <AddTask onAdd={onAdd} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteIt={deleteIt} setReminder={setReminder} />
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;
