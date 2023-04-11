import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import BasicTextFields from "./BasicTextFields";
import BasicButtons from "./BasicButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

function DailyTask() {
  const [task, setTask] = useState("");
  const [wantsToAdd, setWantsToAdd] = useState(false);
  const [toDos, setToDos] = useState([]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleSubmit = () => {
    setToDos([...toDos, { task: task, checked: false }]);
    setTask("");
  };

  const handleChange = (event, index) => {
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
          <div
            className="flex justify-between border rounded m-2 p-4"
            style={{
              opacity: todo.checked && 0.2,
            }}
          >
            {console.log(todo.checked)}
            <p
              style={
                {
                  // textDecoration: todo.checked && "line-through",
                }
              }
            >
              {todo.task}
            </p>
            <div className="flex items-center">
              <div onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </div>
              <Checkbox
                {...label}
                checked={todo.checked}
                onChange={(event) => handleChange(event, index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DailyTask;
