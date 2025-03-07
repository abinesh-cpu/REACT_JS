import { Component } from "react";
import './App.css'

class App extends Component{
  constructor(){
    super()
      this.state={
        text:''
      }
  }
  handlechange=(event)=>{
    this.setState({text:event.target.value})
  }
  render(){
    return(
      <>
          <input type="text" name="" value={this.state.text}onChange={this.handlechange} />
          <p>you typed : {this.state.text}</p>
      </>
    )
  }
}
export default App