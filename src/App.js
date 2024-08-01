import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from 'prop-types'
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";



function App() {

const [mode, setMode] = useState('light')
const [textDark, setTextDark] = useState('Dark Mode On')
const [alert, setAlert] = useState(null)

const showAlert = (message, type) => {
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}

const handleGreen = () => {
  if(mode === 'light' || 'dark' || 'primary' || 'warning' ){
    setMode('success')
    // setTextDark('Dark Mode Off')
    document.body.style.backgroundColor = '#71f575';
    showAlert("green mode Enable", "success")
  }
  
}

const handelOrange = () => {
  if(mode === 'light' || 'dark' || 'primary' || 'success' ){
    setMode('warning')
    // setTextDark('Dark Mode Off')
    document.body.style.backgroundColor = '#d6ce94';
    showAlert("orange mode Enable", "success")
  }
 
}
const handlePrimary = () => {
  if(mode === 'light' || 'warning' || 'dark' || 'success' ){
    setMode('primary')
    // setTextDark('Dark Mode Off')
    document.body.style.backgroundColor = '#5c5c5b';
    showAlert("Dark mode Enable", "success")
  }
  
}

const toggleClick = () => {
  if(mode === 'light'){
    setMode('dark')
    setTextDark('Dark Mode Off')
    document.body.style.backgroundColor = '#060b54';
    showAlert("Dark mode Enable", "success")
  }
  else{
    setMode('light')
    setTextDark('Dark Mode On')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode Enable", "success")
  }
}

  return (
    <>
      <Navbar title = {"TextUtiles"} about ={"About Us"} textDark={textDark} mode = {mode} toggleClick = {toggleClick} handlePrimary={handlePrimary} handelOrange={handelOrange}  handleGreen={handleGreen}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} showAlert={showAlert}/>
      <About/>
    </>
  );
}

export default App;

Navbar.propTypes = {title : PropTypes.string,
                    about : PropTypes.string
}

// Navbar.defaultProps = {
//   title : "Write text here...",
//   about : "Write text here..."
// }