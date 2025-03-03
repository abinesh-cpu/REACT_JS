import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const saveTask = () => {
    if (task) {
      const updatedTasks = tasks.map((item, index) =>
        index === editIndex ? task : item
      );
      setTasks(updatedTasks);
      setTask('');
      setIsEditing(false);
      setEditIndex(null);
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add or Edit a task"
        />
        {!isEditing ? (
          <button onClick={addTask}>Add Task</button>
        ) : (
          <button onClick={saveTask}>Save Task</button>
        )}
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <div className="task-actions">
              <button className="edit-btn" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => removeTask(index)}>
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
