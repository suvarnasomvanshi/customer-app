import React from "react";
import "./Section1.css"
import { VscExtensions } from "react-icons/vsc";
import {CgProfile} from 'react-icons/cg'

function Section1(){
    return(
      <>
      <div className="main">
      <VscExtensions color="white" fontSize="3em"/> 
      <span>Project Name</span>
      <span>Customer Admin</span>
      <span> <CgProfile/></span>
      <span>UserName</span>
      
      </div>
      </>

    );
}
export default Section1;