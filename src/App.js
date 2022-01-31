import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState('light');
  // this will see if the dark mode is on or not
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white"
    } else {
      setMode('dark');
      document.body.style.backgroundColor = "#212529"
    }
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} title={"TextUtils"} aboutText={"About"} mode={mode} />
      <TextForm heading={"Enter the text to analyze below"} mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
