import React, { useState } from "react";

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
          setTimeout(() => setCopySuccess(false), 2000); // Reset copy success message after 2 seconds
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
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} 
          id="myBox"
          placeholder="Enter your text here "
          value={text}
          onChange={handleOnchange}
          rows="8"
          defaultValue={""}
        />
      </div>
      <button className="btn btn-primary my-2 me-4"  onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-2 me-4" onClick={handleDpClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger  my-2 me-4 " onClick={handleClClick}>
        <b>Clear text</b>
      </button>
      <button className="btn btn-success me-4" onClick={handleCopyclipboard}>
        <b>Copy to clipboard</b>
      </button>
       <button className="btn btn-primary " onClick={handleExtraspace}>
        <b>Remove Extra spaces</b>
      </button>

      {copySuccess && <div className="alert alert-success mt-3" role="alert">
        Text copied to clipboard!
      </div>}

      <div>
        <h2>Your Text Summary </h2>
        <p>{getWordCount()} words and {text.length} characters</p>
      </div>
    </div>
  );
};

export default Text;
