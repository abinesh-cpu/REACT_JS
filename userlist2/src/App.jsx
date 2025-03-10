import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      users: [] // Store submitted data
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email, users } = this.state;

    if (name && age && email) {
      const newUser = { name, age, email };
      this.setState({
        users: [...users, newUser], // Add new user to users array
        name: "",
        age: "",
        email: ""
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  render() {
    const { name, age, email, users } = this.state;

    return (
      <div className="container">
        <h1>User Registration</h1>

        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={age}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        <div className="card-container">
          {users.map((user, index) => (
            <div key={index} className="card">
              <h3>{user.name}</h3>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
