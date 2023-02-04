// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes, 
//   Link
// } from "react-router-dom";


function App() {

  // Alert (Video 13) --------------------------------------

  const [alert, setAlert] = useState(null); // state will be null by default, 'alert' -> object, 'setAlert' -> method

  const showAlert = (message, type)=>{
    setAlert({                              // by default alert was null, but using setAlert, it becomes an object right here
      msg : message,
      typ : type                        
    })
    setTimeout( () => {  //an event in setTimeout,to disappear alert
      setAlert(null);
    }, 1500);

  }

  // Dark Mode -----------------------------------

  const [mode, setMode] = useState('light'); // dark mode set as false by default

  const toggleMode = ()=> { // creating this main function for switching b/w modes
    if (mode==='light'){
      setMode('dark');       // setMode is a function , not a variable like 'mode'
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success");
    }
  }



  return (
    <>
     

{/* <Navbar title="TextUtils" home="Home Pg" aboutText="About Us"/> */}

    <Navbar title="Textal" home="Home" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>

    <div className="container"> 

    <TextForm heading="Enter the text to be analyzed" mode={mode} />

    </div>


{/* <Router>

    <Routes>
          <Route path="/about" element={<About />}></Route> 
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>}></Route> 
    </Routes>

</Router> */}    

    {/* <div className="container"> 
            
    </div> */}
   
       
    </>
  );
}

export default App;
