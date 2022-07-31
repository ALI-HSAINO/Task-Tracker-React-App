import Task from "./Task";
const Tasks = ({ tasks, deleteIt, setReminder }) => {
  return (
    <>
      {tasks.map((ele) => (
        <Task
          text={ele.text}
          day={ele.day}
          reminder={ele.reminder}
          key={ele.id}
          id={ele.id}
          deleteIt={deleteIt}
          setReminder={setReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
