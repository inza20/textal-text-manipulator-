import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to Uppercase", "success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)        
        // to make the text area further editable in text area after converting to UpCase
        // ie, to set the value of changed input as text so that it can be converted upon clicking the button
    }


    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <br/>
            <h1>{props.heading} </h1>
            <br/>

            <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
            <br/>

            <div className='container'>

            <span><button type="button" onClick={handleUpClick} className="btn btn-primary" > Convert to Upper case</button> </span>

            <span>  <button type="button" onClick={handleDownClick} className="btn btn-primary" > Convert to Lower case</button> </span>

            <span><button type="button" onClick={handleClearClick} className="btn btn-primary" > Clear Text</button> </span> 

            <span><button type="button" onClick={handleExtraSpaces} className="btn btn-primary" > Remove Extra Spaces</button></span>      
                                
            </div>

            </div>
        
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <hr/><br/>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes read.</p>
            <hr/>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in text box"}</p>
        </div>

        </>        
    )
}