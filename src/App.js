import { Routes, Route} from "react-router-dom"
import { useState } from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';



function App() {
  const [mode, setMode] = useState('light');//Weather my state is enabled or not
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#032a51';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode'
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now!';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark Mode has been disabled", "danger");
      document.title = 'TextUtils -LightMode';
    }
  
  }
  const [modeTwo, setModeTwo] = useState('#044326');//Weather my state is enabled or not
  const toggleModeTwo =()=>{
    if(modeTwo === '#044326'){
      setModeTwo('#910e1b');
      document.body.style.backgroundColor = '#910e1b';
      document.body.style.color = 'white';
      showAlert("Red Mode has been enabled", "success");
      document.title = 'TextUtils -RedMode';
    }
    else{
      setModeTwo('#044326');
      document.body.style.backgroundColor = '#044326';
      document.body.style.color = 'white';
      showAlert("Red Mode has been disabled", "danger");
      document.title = 'TextUtils -Green  Mode';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({msg: message,
      type: type});
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  // const [textMode, setTextMode]= useState('black');
  // const textModeColor=()=>{
  //   if(mode==='light'){
  //     setTextMode('black');
  //   }
  //   else{
  //     setTextMode('white');
  //   }
  // }

  return (
    <div className="App">
    <Routes>
          <Route path='/Navbar' element={<Navbar title = 'TextUtils'  aboutText = 'About Us'  modeTwo={modeTwo} toggleModeTwo={toggleModeTwo}
                  mode={mode} toggleMode={toggleMode}/>} /> 
          <Route path='/Alert' element={<Alert alert={alert}/>} />
          <Route path="/About" element={ <About/> }/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = 'Enter the Text below to analyze' />}/>

    </Routes>
    </div>
  
  );
}

export default App;
