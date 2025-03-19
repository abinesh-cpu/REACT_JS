import React from "react";

function AddTask({ task, setTask, description, setDescription, addTask }) {
  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Title"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default AddTask;
