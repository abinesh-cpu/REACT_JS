import React,{useContext,useState} from 'react';
const themecontext=React.createContext()
function  ThemeProvider({children}){
  const [theme, setTheme] = useState('light');
  const toggletheme=()=>{
    setTheme(prevtheme=>(prevtheme==='light'?'dark':'light'))
  }
  return (
    <themecontext.Provider value={{theme,toggletheme}}>
      {children}
    </themecontext.Provider>
  )
}
function ThemeButton(){
  const {theme,toggletheme}=useContext(themecontext)
  return (
    <button onClick={toggletheme} style={{
      backgroundColor:theme==='light'?'#f0f0f0':'#333',
      color:theme==='light'?'#333':'#f0f0f0',
    }}>
      toggle theme({theme})
    </button>
  )
}
function Para(){
  const {theme}=useContext(themecontext)
  return (
    <p style={{
      backgroundColor:theme==='light'?'#f0f0f0':'#333',
      color:theme==='light'?'#333':'#f0f0f0',
      }}>hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio quidem magni, quas minima veritatis repellat vel nostrum dolorem esse modi consequatur veniam praesentium perferendis asperiores minus magnam quia dignissimos.</p>
  )
}
function App() {
  return (
    <ThemeProvider>
      <ThemeButton/>
      <Para/>
    </ThemeProvider>
  )
}
export default App