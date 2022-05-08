import React, {useState, useEffect} from "react";
import axios from "axios";
import {  useParams } from 'react-router-dom';



export default function ViewStaff(){

    const { id } = useParams();
  const[Username,setUsername] = useState("");
  const[Email,setEmail] = useState("");
  const[FirstName,setFirstName] = useState("");
  const[LastName,setLastName] = useState("");
  const[NIC,setNIC] = useState("");
  const[Telephone,setTelephone] = useState("");

    useEffect(()=>{
        getItems();
        console.log("use effect")
    },[])

    function getItems(){
        axios.get(`http://localhost:8070/staff/get/${id}`)
        .then((res)=>{

        setUsername(res.data.Username);
        setFirstName(res.data.FirstName);
        setEmail(res.data.Email);
        setLastName(res.data.LastName);
        setTelephone(res.data.Telephone);
        setNIC(res.data.NIC);
        }).catch((err)=>{
            alert(err.errorMsg)    
        })
    }


     

    return(

        <div >
        <div className="container" style={{width:'40%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Update Staff Details</h2>
            <br/><br/>
            <form  id="create-course-form">
                <div className="row">
                    
    <div class="input-group form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
        value ={Username}
          onChange={(e)=>{ setUsername(e.target.value);}} 
          required disabled class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Username<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="email"  style={{border:'1px solid #3F3232' }} 
        
         value ={Email}
          onChange={(e)=>{ setEmail(e.target.value);}} 
          required disabled class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>E-mail<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
         value ={FirstName}
          onChange={(e)=>{ setFirstName(e.target.value);}} 
          disabled  required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>First Name<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
         value ={LastName}
          onChange={(e)=>{ setLastName(e.target.value);}} 
          disabled required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Last Name<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
         value ={NIC}
          onChange={(e)=>{ setNIC(e.target.value);}} 
          disabled required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>NIC<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="tel"  style={{border:'1px solid #3F3232' }} 
         value ={Telephone}
          onChange={(e)=>{ setTelephone(e.target.value);}} 
          disabled required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Telephone<span style={{color:'red'}}>*</span> </label>
    </div> 
   </div>
               

          
            </form>
        </div>
        </div>
    )

}
