import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import BasicTextFields from "./BasicTextFields";
import BasicButtons from "./BasicButtons";
import DeleteIcon from "@mui/icons-material/Delete";

function DailyTask() {
  const [task, setTask] = useState("");
  const [wantsToAdd, setWantsToAdd] = useState(false);
  const [toDos, setToDos] = useState([]);

  const handleSubmit = () => {
    setToDos([...toDos, task]);
    setTask("");
  };
  return (
    <div>
      <div className="bg-orange-400">
        <div className="flex justify-between">
          <h1>DailyTask</h1>
          <AddIcon onClick={() => setWantsToAdd(true)} />
        </div>
      </div>
      {wantsToAdd && (
        <div className="flex justify-center items-center">
          <BasicTextFields label="Task" value={task} setValue={setTask} />
          <BasicButtons label="add task" onClick={handleSubmit} />
        </div>
      )}
      {toDos.map((todo) => {
        return (
          <div className=" border rounded m-2 p-4">
            <p>{todo}</p>
            <div>
              <DeleteIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DailyTask;
