// import { useState } from "react"
import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("Enter text here...")
    const handleUpClick = () => {
        console.log("Clicked")
        let changeText = text.toUpperCase()
        setText(changeText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLoClick = () => {
      let lowerCase = text.toLowerCase()
      setText(lowerCase)
      props.showAlert("Converted to lower case", "success")
    }
    const handleFirstClick = () => {
      let capitalizeText = text.split(". ")
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
      setText(capitalizeText)
      props.showAlert("Converted to capital case", "success")
    }
    const handleClearClick = () => {
      let clearText = ""
      setText(clearText)
      props.showAlert("cleard", "danger")
    }

    const copySuccess = () => {
      let copyText = document.getElementById("text")
      copyText.select()
      navigator.clipboard.writeText(copyText.value)
      props.showAlert("copyed text", "success")
    }

    

    const handleOnChange = (events) => {
        console.log("changed")
        let newText = events.target.value
        setText(newText)
    }
    return (
        <>

            <div className={`container my-3 text-${props.mode === 'light'? 'dark' : 'white'}`}>
              <h1>Enter text to analyize below</h1>
                <div class="mb-3">
                    <textarea className="form-control" style={{backgroundColor : props.mode === 'light'? 'white' : 'gray', color : props.mode === 'light'? 'black' : 'white'}} value={text} onChange={handleOnChange} id="text" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-3' onClick={handleFirstClick}>Capitalize first letter</button>
                <button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-3' onClick={copySuccess}>Copy Text</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light'? 'dark' : 'white'}`}>
              <h2>Your text summary</h2>
              <p><b>{text.split(" ").length}</b> words and <b>{text.replace(/\s/g, "").length}</b> Characters</p>
              <p><b>{text.split(" ").length * 0.008}</b> minutes to read</p>
               <h2>Preview</h2>
               <p><b>{text}</b></p>
            </div>
        </>
    )
}

export default TextForm
