import React from 'react'
import { useState } from 'react'

export default function Main(props) {
    const [text, setText] = useState("");

    function uppperClickHandler() {
        let newText = text.toUpperCase();
        setText(newText);
    }

    function lowerClickHandler() {
        let newText = text.toLowerCase();
        setText(newText);
    }

    function clearTextHandler() {
        setText("");
    }

    function copytextHandler() {
        navigator.clipboard.writeText(text);
    }

    function extraSpaceHandler() {
        let textArray = text.split(" ");
        let newText = textArray.filter(words => words !== "").join(" ");   //* Filtering text and then joining them
        setText(newText);
    }

    function inputHandler(event) {
        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h1 className='text-center my-3' style={{ color:props.textColor }}>Enter Your Text Here</h1>
                <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="6" onChange={inputHandler} value={text} unselectable='h' style={{ resize: 'none',color:props.textColor,backgroundColor:props.bgColor}}></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={uppperClickHandler}>Uppercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={lowerClickHandler}>Lowercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={clearTextHandler}>Clear Text</button>
                <button className='btn btn-primary my-3 mx-2' onClick={copytextHandler}>Copy Text</button>
                <button className='btn btn-primary my-3 mx-2' onClick={extraSpaceHandler}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.textColor }}>
                <h2>Text Summary</h2>
                <p>
                    Number of words is {text.split(" ").length} and Number of characters is {text.length}.
                </p>
                <p>
                    Total {Math.floor(text.split(" ").length / 150)} Minutes read.
                </p>
            </div>
            <div className="container" style={{ color: props.textColor }}>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
