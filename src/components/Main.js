import React from 'react'
import { useState } from 'react'

export default function Main() {
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

    function inputHandler(event) {
        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h1 className='text-center my-3'>Enter Your Text Here</h1>
                <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="6" onChange={inputHandler} value={text} unselectable='h' style={{resize:'none'}}></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={uppperClickHandler}>Uppercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={lowerClickHandler}>Lowercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={clearTextHandler}>Clear Text</button>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <p>
                    Number of words is {text.split(" ").length} and Number of characters is {text.length}.
                </p>
                <p>
                    Total {Math.floor(text.split(" ").length/150)} Minutes read.
                </p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{ text}</p>
            </div>
        </>
    )
}
