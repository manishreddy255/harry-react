import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // type is a string, either 'success' or 'danger'
    // it will set the color of the alert

    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // this will see if the dark mode is on or not
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("light mode is on", "success");
      document.title = "TextUtils - Light Mode"

    } else {
      setMode('dark');
      document.body.style.backgroundColor = "#212529"
      showAlert("dark mode is on", "success");
      document.title = "TextUtils - Dark Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} title={"TextUtils"} aboutText={"About"} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm alert={showAlert} heading={"Enter the text to analyze below"} mode={mode} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>


      {/* <About /> */}
    </>
  );
}

export default App;
