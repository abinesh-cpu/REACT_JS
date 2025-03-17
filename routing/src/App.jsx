import React from 'react';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import pagenotfound from './components/pagenotfound';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/:name" Component={About}/>
        <Route path="/contact/:name" element={<Contact/>}/>
        <Route path="*" element={pagenotfound}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;