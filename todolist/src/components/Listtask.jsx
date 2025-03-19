import React from "react";

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="task-list">
        <h1>TASK LIST</h1>
      {tasks.map((t, index) => (
        <div key={index} className={`task ${t.completed ? "completed" : ""}`}>
          <div className="task-content">
            <span className="task-title">{t.text}</span>
            <p className="task-desc">{t.description}</p>
          </div>
          <div className="task-actions">
            {/* <button onClick={() => toggleTask(index)}>✔</button> */}
            <button onClick={() => editTask(index)}>✏</button>
            <button onClick={() => deleteTask(index)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
