import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import BasicTextFields from "./BasicTextFields";
import BasicButtons from "./BasicButtons";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Task({
  task,
  checked,
  edited,
  handleDelete,
  handleChange,
  handleEdit,
  submitEdit,
}) {
  const [editedTask, setTask] = useState(task);

  return (
    <div
      className="flex justify-between border rounded m-2 p-4"
      style={{
        opacity: checked && 0.2,
      }}
    >
      {edited ? (
        <div className="flex items-center">
          <BasicTextFields
            label="Edit"
            //   placeholder={task}
            value={editedTask}
            setValue={setTask}
            width={"10inch"}
          />
          <div className="flex w-1">
            <BasicButtons
              label="ok"
              width={2}
              onClick={() => submitEdit(editedTask)}
            />
          </div>
        </div>
      ) : (
        <p
          style={
            {
              // textDecoration: todo.checked && "line-through",
            }
          }
        >
          {task}
        </p>
      )}
      <div className="flex items-center">
        <div className="mr-2" onClick={handleEdit}>
          <EditIcon />
        </div>
        <div onClick={handleDelete}>
          <DeleteIcon />
        </div>
        <Checkbox
          {...label}
          checked={checked}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
}

export default Task;
