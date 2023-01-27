import "./Button.css"
import {useState} from "react";
import Form from "../Form/Form";

function Button(){
    const [popup,setPopup]=useState("false")

function openPopup(){
    return(setPopup(!popup))
   }



    return(
        <>
           <div><Button className="Add" onClick={openPopup}>Add users</Button></div>

         {popup ?
         <div className="main">
         <div className="popup">
            <Form/>
          <h2 onClick={closePopup}>Cancel</h2>
          </div>
        </div> :""}
        </>

    )
}
export default Button;