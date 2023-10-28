import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowerercase","success")
    }

    const handleClearClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText='';
        setText(newText)
        props.showAlert("Text is cleared","success")
    }

    
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      console.log("I am copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied","success")
    }
    
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("ExtraSpace is removed","success")
    }

    const [text, setText] = useState('');
    // setText("New text");
  return (
     <>
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'white' } }>
       
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' } } rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
     <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Loweercase</button> 
     <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button> 
     <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button> 
     <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra Space</button> 
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#2a3b8a' } }>
      <h2>your text summary</h2>
      <p>{text.split( " ").length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split( " ").length }Minutes to read</p>
      <h2>Priview</h2>
      <p>{text.length>0?text:"Enter someting in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}










