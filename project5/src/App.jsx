import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isEditing: false,
      editIndex: null,
      taskInput: ''
    };
  }

  addTask = () => {
    if (this.state.taskInput.trim()) {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, prevState.taskInput],
        taskInput: ''
      }));
    }
  };

  removeTask = (index) => {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  editTask = (index) => {
    this.setState({
      isEditing: true,
      editIndex: index,
      taskInput: this.state.tasks[index]
    });
  };

  saveTask = () => {
    if (this.state.taskInput.trim()) {
      const updatedTasks = this.state.tasks.map((task, index) =>
        index === this.state.editIndex ? this.state.taskInput : task
      );
      this.setState({
        tasks: updatedTasks,
        isEditing: false,
        editIndex: null,
        taskInput: ''
      });
    }
  };

  handleInputChange = (e) => {
    this.setState({ taskInput: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={this.state.taskInput}
            onChange={this.handleInputChange}
            placeholder="Add or Edit a task"
          />
          <button onClick={this.state.isEditing ? this.saveTask : this.addTask}>
            {this.state.isEditing ? 'Save Task' : 'Add Task'}
          </button>
        </div>
        <ul className="task-list">
          {this.state.tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <div className="task-actions">
                <button onClick={() => this.editTask(index)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => this.removeTask(index)} className="delete-btn">
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
