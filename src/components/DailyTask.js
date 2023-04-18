import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import BasicTextFields from "./BasicTextFields";
import BasicButtons from "./BasicButtons";
import Task from "./Task";

function DailyTask() {
  const [task, setTask] = useState("");
  const [wantsToAdd, setWantsToAdd] = useState(false);
  const [toDos, setToDos] = useState([]);

  const handleSubmit = () => {
    setToDos([...toDos, { task: task, checked: false, edited: false }]);
    setTask("");
  };

  const handleChange = (index) => {
    const newTodos = [...toDos];
    const [removed] = newTodos.splice(index, 1);
    removed.checked = !removed.checked;
    removed.checked ? newTodos.push(removed) : newTodos.unshift(removed);
    setToDos(newTodos);
  };
  const handleDelete = (index) => {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  };
  const handleEdit = (index) => {
    const newTodos = [...toDos];
    newTodos[index].edited = !newTodos[index].edited;
    setToDos(newTodos);
  };
  const submitEdit = (index, editedTask) => {
    const newTodos = [...toDos];
    newTodos[index].task = editedTask;
    newTodos[index].edited = false;
    setToDos(newTodos);
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="bg-orange-400 p-2">
      <div>
        <div className="flex justify-between">
          <h1>DailyTask</h1>
          <AddIcon onClick={() => setWantsToAdd(true)} />
        </div>
      </div>
      {wantsToAdd && (
        <div className="flex justify-center items-center">
          <BasicTextFields
            label="Task"
            value={task}
            setValue={setTask}
            width={"10inch"}
          />
          <BasicButtons label="add task" onClick={handleSubmit} />
        </div>
      )}
      {toDos.map((todo, index) => {
        return (
          <Task
            task={todo.task}
            checked={todo.checked}
            edited={todo.edited}
            handleDelete={() => handleDelete(index)}
            handleChange={(event) => handleChange(event, index)}
            handleEdit={() => handleEdit(index)}
            submitEdit={(editedTask) => submitEdit(index, editedTask)}
          />
        );
      })}
    </div>
  );
}

export default DailyTask;
