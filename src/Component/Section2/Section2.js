import React from "react";
import "./Section2.css";
import Constant from "../Constant/Constant"
import {useState,useEffect} from "react"
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {RxCross1} from 'react-icons/rx'
import {TfiCheck} from 'react-icons/tfi'
//import { CgProfile } from 'react-icons/cg'
//import {AiFillDelete} from 'react-icons/ai'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { fontWeight } from "@mui/system";
import Pagination1 from "./Pagination1"

function Section2(){
    //const Search = () => {
    const [search,setSearch]=useState("");
    const [open, setOpen] =useState(false);
    const [userName,setUserName]=useState("")
    const [firstName,setFirstName]=useState(" ")
    const [lastName,setLastName]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const[submit,setSubmit]=useState([])
    
   
   
   
   
   
    
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    
    
    function handleUserName(e){
        setUserName(e.target.value)
    }
     function handleFirstName (e){
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        setLastName(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value)
    }
    
        function handleSubmit(){
        
        const addData={userName,firstName,lastName,password,confirmPassword}
        setSubmit([...submit,addData])
        setUserName("")
        setFirstName("")
        setLastName("")
        setPassword("")
        setConfirmPassword("")
       localStorage.setItem("key",JSON.stringify(submit))
        setOpen(false)
        
       }
       const objectArrs= submit;
       console.log(objectArrs)

    {/*function Pagination1({objectArrs}){
        const renderPage = (pageNum) => {
        const startIndex = (pageNum - 1) * 3;
        const endIndex = startIndex + 3;
        const objToRender = objectArrs.slice(startIndex, endIndex);
        
        }
    }*/}
       
       
       
       function handleSearch(value){
        setSearch(value)
       }
       {/*function detele(item){
        const indexOfDelete=submit.findIndex((x)=>x.userName===item.userName)
        submit.splice(indexOfDelete,1)
        setSubmit([...submit])
        } */}                       
       useEffect(()=>{
        if(localStorage.getItem("key")){
          setSubmit(JSON.parse(localStorage.getItem("key")))
        }
       },[])
    

    return(
       
     <div className="mains">
         <div className="mains2">
            <span className="customer">Customers</span>
           {/*<span>*/}
           {/*<input className="btn1" onClick={handleSearch} text= "Search"/>*/}
            <button className="btn1" onClick={handleSearch}><FiSearch color="black" fontsize="1em"/></button>
            <button className="btn2" onClick={handleOpen}>{<AiOutlinePlusSquare color="black" fontsize="1em" />}</button>
              
            
                
            
              <Dialog open={open} className="dialog" onClose={handleClose}>
                      <p>Add User | Login Details</p>
                      <input className="input" onChange={handleUserName} value={userName} placeholder='Username*'/>
                      <input className="input" onChange={handleFirstName} value={firstName} placeholder='First Name*'/>
                      <input className="input" onChange={handleLastName} value={lastName} placeholder='Last Name*'/>
                      <input className="input" onChange={handlePassword} value={password} placeholder='Password*'/>
                      <input className="input" onChange={handleConfirmPassword} value={confirmPassword} placeholder='Confirm Password*'/>
                      

                <DialogActions >
                   <button onClick={handleClose}className="btnTweet">{<RxCross1/>}</button>
                   {/*<Button Sign={'Proceed'} btnNext={handleSubmit}className={style.btnNext} logo={<TfiCheck/>}/> */}
                   
                   <button onClick={handleSubmit} className="procced">procced</button>
                   {/*<Button onClick={handleClose} className="btnNext">{<RxCross1/>}</Button>*/}

                </DialogActions>
                
             </Dialog>
            
           {/*</span>*/}


            <span className="border"></span>
            <span className="option">
                <select className="select"  name="Sort by" id="1">
                    <option value="" disabled="disabled">Sort by</option>
                    <option value="1">alphabetically</option>
                    <option value="2">new users</option>
                    <option value="3">old users</option>
                </select>
            </span>
         </div>

 
 
 
    
     {/*<div>{submit.filter((s)=>{
      return(<>s.userName.toLowerCase().includes(search.toLowerCase())</>);
        }).map((x)=>{
            {objToRender.map((objectArr, index) => {

             return(
                
                   <>
    
                   <div className="profile" key={index}>{<CgProfile color="black" fontSize="1.5em"/>} 
                   <span>&nbsp;{objectArr.firstName} {objectArr.lastName}</span>
                   <span >{objectArr.userName}</span> 
  
                    <button className="delete" onClick={detele}>{<AiFillDelete/>}</button>
                    </div>
                   </>
                 );
             })}
           })}
        </div>
        
                     <div>
                        {renderPage(currentPage)}
                        <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                         <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                    </div>
        */}
            <div>{submit.filter((s)=>{
             return s.userName.toLowerCase().includes(search.toLowerCase())}).map((x)=>{

    
           return(
        <>
        {/*<div className="profile" key={index}>{<CgProfile color="black" fontSize="1.5em"/>} 
        <span> &nbsp;{x.firstName} {x.lastName}</span>
        <span >{x.userName}</span>
        <button className="delete" onClick={detele}>{<AiFillDelete/>}</button>
           </div>*/}
           <Pagination1/>
        </>
       )
    
})}</div>






          {/*<div>{submit.filter((s)=>{
            return s.userName.toLowerCase().includes(search.toLowerCase())}).map((x)=>{


          return(
            <>
                <div className="profile">{<CgProfile color="black" fontSize="1.5em"/>} 
                <span> &nbsp;{x.firstName} {x.lastName}</span>
                <span >{x.userName}</span>
  
                <button className="delete" onClick={detele}>{<AiFillDelete/>}</button>
               </div>
            </>
               )
        })}</div>*/}



        </div>
       
    );
}


export default Section2;



