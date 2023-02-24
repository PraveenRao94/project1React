import React ,{useState} from 'react'

export default function Textform(props) {


  // State //////////////////////////

    const[text , textchange] = useState("")

    // ///////////////////////////////////////////////


   const  handleUpClick = ()=>{
    let toUp = text.toUpperCase()
    textchange(toUp)
    props.showalert("Converted to Upper case", "success")
   }
   const  handleLwClick = ()=>{
    let toLw = text.toLowerCase()
    textchange(toLw)
    props.showalert("Converted to Lower case", "success")
    
   }
   const handleOnchange = (e)=>{
    textchange(e.target.value)
    
   }


   const clear = ()=>{ 
    let clr = " "
    textchange(clr)
    props.showalert("Text Cleared", "success")
   }
  return (
    <>
    <div className="container">
            <h1 style={{color:props.mode === 'dark'? "white": "black"}}>Enter the text here</h1>
        <div className="mb-3">
               
                <textarea className="form-control" value = {text}  onChange = {handleOnchange}id="mybox" rows="8" style={{backgroundColor:props.mode === 'dark'? "white": "black" , color:props.mode === 'dark'? "black": "white"}}></textarea>
        </div>
        <button className = {`btn btn-${props.mode === 'dark'? 'dark':"primary"} mx-3`} onClick={handleUpClick}>Convert to Upper-case</button>
        <button className = {`btn btn-${props.mode === 'dark'? 'dark':"danger"} mx-3`} onClick={handleLwClick}>Convert to Lower-case</button>
        <button className = {`btn btn-${props.mode === 'dark'? 'dark':"success"} mx-3`} onClick={clear}>Clear-All</button>
    </div>
    <div className="container my-3">
        <h2 style= {{color:props.mode === 'dark'? "white": "black"}}>Your text summary </h2>
        <p style=  {{color:props.mode === 'dark'? "white": "black"}}>Number Of Words {text.split(" ").length} and it takes {0.008 * text.split(' ').length} Min to read this and Number of Char is {text.length}</p>
        <h2 style=  {{color:props.mode === 'dark'? "white": "black"}}>Preview</h2>
        <p style=  {{color:props.mode === 'dark'? "white": "black"}}> {text.length>0 ? text : "Enter Something to Preview"}</p>
    </div>
    </>
  )
}
