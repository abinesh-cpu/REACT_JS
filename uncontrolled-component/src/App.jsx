import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(){
    super()
      this.myref=React.createRef()
      }
  handlechange=(event)=>{
    event.preventDefault()
   alert('you typed' + this.myref.current.value) 
  }
  render(){
    return(
      <>
          <form onSubmit={this.handlechange}>
              <input type="text" id="" ref={this.myref}/>
              <input type="submit" value="submit" />
          </form>
      </>
    )
  }
}
export default App