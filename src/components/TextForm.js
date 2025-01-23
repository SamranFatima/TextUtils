import React, {useState} from 'react'
import Navbar from "./Navbar";
import Alert from "./Alert";

export default function TextForm(props) {
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
  const handleUpClick = () =>{
    // console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick = () =>{
    // console.log("UpperCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleClearClick = () =>{
    // console.log("UpperCase was clicked " + text);
    setPreviousText(text);  
    let newText = " ";
    setText(newText);
    props.showAlert("Text is cleared", "danger");
  }
  const handleRecoverClick = () =>{
    // console.log("UpperCase was clicked " + text);
    setText(previousText);
    props.showAlert("Text has been Recovered", "success");
  }
  const handleCopyClick = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }
  const removeExtraSpace = () =>{
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed ExtraSpaces", "success");
  }
  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  
  const [text, setText]= useState("");
  const [previousText, setPreviousText] = useState("");
  // text = 'wrong way tp set the text';
  // setText('Correct way to set the text');

  return (
    <>
      <Navbar title = 'TextUtils'  aboutText = 'About Us'  modeTwo={modeTwo} toggleModeTwo={toggleModeTwo}
      mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className='container my-3' >
          <h1>{props.heading}</h1>
          <div className="mb-3 my-3">
            <textarea className="form-control" style={{backgroundColor: mode=== 'dark'?'#343a40':'white', color: mode === 'dark'?'white': 'black',  }}
            id="myBox"
            value={text} 
            onChange={handleOnChange} 
            rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleRecoverClick}>Recover Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
      </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something to preview'}</p>
    </div>
    </>
  )
}
