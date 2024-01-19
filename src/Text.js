import React, { useState } from "react";
import "./bg.css";


const Text = (props) => {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!","success");

  };

  const handleDpClick = () => {
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert("Converted to Lowercase!!","success");
  };

  const handleClClick = () => {
    let NewText = "";
    setText(NewText);
    props.showAlert("Text cleared!!","success");

  };
  const handleExtraspace = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showAlert("Extra spaces removed!!","success");

  };

  const handleCopyclipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 500); // Reset copy success message after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text to clipboard", err));
    } else {
      console.error("Clipboard API not supported");
    }
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = () => {
    const trimmedText = text.trim();
    return trimmedText ? trimmedText.split(/\s+/).length : 0;
  };


  return (
    <div className="Container" style={{color:props.mode==='dark'?'white':'black'}}>
      {/* heading yaha hai bhaiiiiii */}

      <h1 style={{ color: '#ffffff' }}>{props.heading}</h1>
      <div className="mb-3 position-relative">
        <textarea
          className="form-control"
          style={{
          width:"100%",
          height:"280px",
          backgroundColor:props.mode==='dark'?'black':'white',
          color:props.mode==='dark'?'#fff':'black',
          opacity: props.mode === 'dark' ? '0.74' : '0.59',
          fontSize:"20px",
          fontWeight:"550"}} 
          id="myBox"
          placeholder="Enter your text here "
          value={text}
          onChange={handleOnchange}
          rows="8"
          defaultValue={""}
        />
        <i className="bi bi-copy position-absolute top-0 end-0 mt-2 me-3" onClick={handleCopyclipboard} style={{ 
          cursor: 'pointer',fontSize:"18px"
          }}></i>
       {copySuccess && 
      <div className="copied-message" style={{ 
      fontSize: '12px', position: 'absolute',
      top:"12.5%",
      left:"95%",
      backgroundColor:`${props.mode === 'dark' ? '#000' : '#fff'}`,
      fontWeight:"bold",
      marginTop:"1px",
      padding:"3px",
      border:`1px solid  ${props.mode === 'dark' ? '#fff' : '#000'}`,
      borderRadius:"10px"
      }}>
      copied!
       </div>
      }
     
      </div>
      <button className="btn btn-primary my-2 me-4"  onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-2 me-4" onClick={handleDpClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary me-4 " onClick={handleExtraspace}>
        <b>Remove Extra spaces</b>
      </button>
      <button className="btn btn-danger  my-2 me-4 " onClick={handleClClick}>
        <b>Clear text</b>
      </button>

     

      <div style={{color:"white"}}>
        <h2>Your Text Summary </h2>
        <p>{getWordCount()} words and {text.length} characters</p>
      </div>
    </div>
  );
};

export default Text;
