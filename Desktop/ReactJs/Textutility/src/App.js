//import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/textForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title='TextUtiles -Dark mode'
      // setInterval(() => {
      //   document.title='TextUtils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now'
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      //document.title='TextUtiles -Light mode'
    }
  }
  return (
   <>
  <Router>
  <Navbar title="TextUtils" abouttext='About Us' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  
  <div className="container my-3">
  <Routes>
         
          <Route exact path="/about" element={<About mode={mode}/>} />
            
          
         
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/>}/>
    
          
        </Routes>
         
    
        
          
  
   
  </div></Router>
</>
  );
}

export default App;
