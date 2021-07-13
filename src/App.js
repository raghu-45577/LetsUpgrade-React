import React from "react"
import "./style.css"
import Button from "./Button"

const App=()=>{
    return( 
        <div>
            <div className="head">
                <h1 style={{textAlign:"center"}}>Hello world!</h1>
                <h2 style={{textAlign:"center"}}>Sample React Assignment</h2>
            </div>
           
            <div className="sub">
                <Button Text="Red"/>
                <Button Text="Blue"/>
                <Button Text="Yellow"/>
            </div>
        </div>
                

       
    
    )
}

export default App