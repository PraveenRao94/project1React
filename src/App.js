import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Switch from 'react-router-dom';


function App() {

  const  [mode ,setMode] = useState("light")
  const [text,setText] = useState("light")
  const [alert, setalert] = useState(null)
  
  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
   
  } 
  
  const togglemode = ()=>{
    if(mode && text === "light"){
      setMode ("dark") 
      setText ("dark")
      document.body.style.backgroundColor = "black"
      showAlert("You have Enabled Dark Mode" , "success")
      document.title = "TextChange-Dark Mode"
    setTimeout(() => {
      document.title = "TextChange-Home"
      }, 2000);
      
    }else{
      setMode ("light")
      setText ("light")
      document.body.style.backgroundColor = "white"
      showAlert("You have Enabled Light Mode" , "success")
      document.title = "TextChange-Light Mode"
      setTimeout(() => {
        document.title = "TextChange-Home"
        }, 2000);
    }
  }
  
  return (
    <>
  
<Navbar title = 'Text Conersion' aboutName = "About US"  mode = {mode} toggleMode = {togglemode}  text = {text}/>
<Alert  alert = {alert}/>
<div className="container my-3">

<Routes>
          <Route exact path="/about" element = {<About toggleMode = {togglemode}/>}>
          
          </Route>
          
          <Route exact path="/" element = {<Textform mode = {mode} showalert = {showAlert}/>}>
          
          </Route>


</Routes>
</div>

      </>
  )
}

export default App;

