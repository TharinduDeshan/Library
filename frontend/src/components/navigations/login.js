import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import p1 from "../../images/library2.jpg";
import p2 from "../../images/library4.jpg";

import "../../css/InitialPage.css"
import Swal from "sweetalert2";
export default function Login(props) {

    const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const[Username,setUsername] = useState("");
const[Password,setPassword] = useState("");

 
  
  const history = useNavigate();

  function customerLogin(){
    history(`/customer/home`)
}

function StaffLogin(){
    history(`/staff/staffHome`)
}

const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
  
  
    // Find user login info
    const loginData = {Username,Password}
   
    axios.post("http://localhost:8070/staff/login",loginData).then((res)=>{

     // Compare user info
     
     if (res) {
        console.log(res.data==0);
        console.log(res.data);
        if (res.data==0) {
            Swal.fire(
                'Uh-oh!',
                'Invalid Username or Password!',
                'error'
              )
        } else {

            StaffLogin();
        }
      } else {
        console.log('no user');

        // Username not found
        // setErrorMessages({ name: "uname", message: errors.uname });
      }

    }).catch((err) =>{
      alert(err)
      
    //   setErrorMsg(err.response.data.error);
    })
   
  };

return (
   
            <div >
        <div className="container" style={{width:'40%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Login</h2>
            <br/><br/>
            <form onSubmit={handleSubmit}  id="create-course-form">
                <div className="row">
                    
                <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
        
        onChange={(e)=>{ setUsername(e.target.value);}}
          required  class="form-control" name="uname" id="password" placeholder="Username"/>
        <label for="password" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Username<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="password"  style={{border:'1px solid #3F3232' }} 
        
        onChange={(e)=>{ setPassword(e.target.value);}}
          required  class="form-control" name="pass" id="password" placeholder="Username"/>
        <label for="password" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Password<span style={{color:'red'}}>*</span> </label>
    </div> 
         

  
   </div>
     
   <button type="submit" style={{width:'40%',float:'center'}} className="btn btn-primary text-center" >Login</button>

          
            </form>
        </div>
        </div>
     

  );
}
