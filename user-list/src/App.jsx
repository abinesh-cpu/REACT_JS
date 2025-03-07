import React from "react";
import Userlist from "./userlist";
import "./App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/users")
    .then((response)=>response.json())
    .then((data)=>this.setState({users:data}))
    .catch((error)=>console.error("error fetching users :",error))
  }
  render(){
    return(
      <div>
        <h1>USER LIST</h1>
        <Userlist users={this.state.users}/>
      </div>
    )
  }
}
export default App