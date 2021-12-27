// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React, { useState } from 'react'


function App() {
  const [textColor, SetTextColor] = useState("black");
  const [bgColor, setBgColor] = useState("white")


  const changeColorScheme = (bgColor, txtColor,event) => {
    console.log(event.target);
    event.target.style.border = `2px solid ${txtColor}`;
    document.body.style.backgroundColor = bgColor;
    SetTextColor(txtColor)
    setBgColor(bgColor)
  }

  return (
    <>
      <Navbar changeColorScheme={changeColorScheme} textColor={textColor} SetTextColor={SetTextColor} setBgColor={setBgColor} bgColor={bgColor}></Navbar>
      <div className="container my-3">
        <Main textColor={textColor} bgColor={bgColor}></Main>
      </div>
    </>
  );
}

export default App;
