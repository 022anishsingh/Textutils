import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App( ) {
  const [mode, setMode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
     },1500)
  
  }
   const toggleMode=()=>{
    if(mode==='light'){

      setMode('dark');
      document.body.style.backgroundColor='#2a3b8a';
      showalert("Dark mode has been enabled","success")
    }
    else {
      
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
    <TextForm showAlert={showalert} heading="Enter the text you analze below" mode={mode}/>
    </div>
        {/* </Router> */}
    {/* <About/> */}
    {/* <About/> */}
    
</>
  
    
  );
}

export default App;
