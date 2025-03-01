import React from "react";
import './App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:'VYSAKH'
    }
  }
  handlechange=()=>{
    this.setState({name:'ABI BRO'})
  }
  render(){
    return(
      <>
        <h1>HI EVERYONE {this.state.name} IS HERE</h1>
        <button onClick={this.handlechange}>changename</button>
      </>
    )
  }
}
export default App