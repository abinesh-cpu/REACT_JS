import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  handlechange = () => {
    this.setState((state) => ({ count:state.count + 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.handlechange}>count {this.state.count}</button>
      </>
    );
  }
}

export default App;