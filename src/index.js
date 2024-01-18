import React, { useState } from "react";
import ReactDom from 'react-dom/client';
import Navbar from "./Navbar.jsx";
import Text from "./Text.js";
import Alertmsg from "./Alertmsg.js";
import About from "./About.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// Create a functional component
const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      // jab dark mode hoto ye kro niche wale kaam :
        setMode('dark');
        document.body.style.backgroundColor='#0a0541';
        showAlert("DarkMode enabled","success");
        document.title="TextUtils - Dark Mode";  // when you are switching to any particular section ..thene the title also change to that location . 
        
    }
    else {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("LightMode enabled","success");
        document.title="TextUtils - Light Mode";
}
  }
  return (
    <React.StrictMode>
      <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>      
        <Alertmsg alert={alert}/>
      <div className="container my-5">
      <Routes>
          <Route exact path="/about"
            element ={<About mode={mode}/>}/>
          <Route exact path="/"
        element={<Text showAlert={showAlert} heading="Enter your Text to analyze" mode={mode}/>}/>
        </Routes>
      </div>
      </Router>
    </React.StrictMode>
  );
}                                           

// Use the functional component inside createRoot
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);