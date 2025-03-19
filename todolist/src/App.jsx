import { useState } from "react";
import AddTask from "./components/Addtask";
import ListTask from "./components/listtask";
import './App.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (task.trim() !== "" && description.trim() !== "") {
      setTasks([...tasks, { text: task, description, completed: false }]);
      setTask("");
      setDescription("");
    }
  };

  // const toggleTask = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks[index].completed = !newTasks[index].completed;
  //   setTasks(newTasks);
  // };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.text);
    setDescription(taskToEdit.description);
    deleteTask(index);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <AddTask task={task} setTask={setTask} description={description} setDescription={setDescription} addTask={addTask} />
      <ListTask tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}











// import { useState, useEffect } from "react";
// import axios from "axios";
// import './App.css';
// import AddTask from "./AddTask";
// import TaskList from "./TaskList";

// export default function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [description, setDescription] = useState("");

//   // Fetch tasks from API on component mount
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos?_limit=5") // Example API
//       .then((response) => {
//         const formattedTasks = response.data.map((t) => ({
//           text: t.title,
//           description: "No description",
//           completed: t.completed,
//         }));
//         setTasks(formattedTasks);
//       })
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   // Add Task
//   const addTask = () => {
//     if (task.trim() !== "" && description.trim() !== "") {
//       const newTask = { text: task, description, completed: false };

//       axios
//         .post("https://jsonplaceholder.typicode.com/todos", newTask)
//         .then((response) => {
//           setTasks([...tasks, response.data]);
//           setTask("");
//           setDescription("");
//         })
//         .catch((error) => console.error("Error adding task:", error));
//     }
//   };

//   // Toggle Task Completion
//   const toggleTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//   };

//   // Delete Task
//   const deleteTask = (index) => {
//     axios
//       .delete(`https://jsonplaceholder.typicode.com/todos/${index}`)
//       .then(() => {
//         setTasks(tasks.filter((_, i) => i !== index));
//       })
//       .catch((error) => console.error("Error deleting task:", error));
//   };

//   // Edit Task
//   const editTask = (index) => {
//     const taskToEdit = tasks[index];
//     setTask(taskToEdit.text);
//     setDescription(taskToEdit.description);
//     deleteTask(index);
//   };

//   return (
//     <div className="todo-container">
//       <h1>To-Do List</h1>
//       <AddTask task={task} setTask={setTask} description={description} setDescription={setDescription} addTask={addTask} />
//       <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
//     </div>
//   );
// }
