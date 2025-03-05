// import React from "react";
// import "./App.css";

// class App extends React.PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       name: "VYSAKH",
//     };
//     console.log('component created')
//   }

//   handleChange = () => {
//     this.setState({ name: "ABI BRO" });
//   };
//   componentDidMount(){
//     console.log('component mounted')
//   }

//   render() {
//     console.log("Component rendered");
//     return (
//       <div className="container">
//         <h1>HI EVERYONE, <span>{this.state.name}</span> IS HERE</h1>
//         <button onClick={this.handleChange}>Change Name</button>
//       </div>
//     );
//   }
// }

// export default App;






// import React from "react";
// import "./App.css";

// class App extends React.PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       count:1,
//     };
//     console.log('component created')
//   }

//   handleChange = () => {
//     this.setState({ count: this.state.count+1 });
//   };
//   componentDidUpdate(prevProps,prevState){
//     console.log(`changes from ${prevState.count} to ${this.state.count}`)
//   }

//   render() {
//     console.log("Component rendered");
//     return (
//       <div className="container">
//         <h1>count :<span>{this.state.count}</span></h1>
//         <button onClick={this.handleChange}>increment</button>
//       </div>
//     );
//   }
// }

// export default App;







import React from "react";
import "./App.css";
import { Component } from "react";

class Message extends Component{
  componentWillUnmount(){
    console.log('message component being removed')
  }
  render(){
    return <p>hello iam here</p>
  }
}

class App extends Component{
  state={show:true};
  togglemessage=()=>{
    this.setState({show:!this.state.show});
  };
  render(){
    return(
    
      <div className="container">
       <button onClick={this.togglemessage}>
         {this.state.show?"remove message":"show message"}
      </button>
         {this.state.show&&<Message />}
         </div>
    );
  }
}
export default App