import React from "react";
import "./App.css";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: "VYSAKH",
    };
  }

  handleChange = () => {
    this.setState({ name: "ABI BRO" });
  };

  render() {
    console.log("Component rendered");
    return (
      <div className="container">
        <h1>HI EVERYONE, <span>{this.state.name}</span> IS HERE</h1>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    );
  }
}

export default App;
