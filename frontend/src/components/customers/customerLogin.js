import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CustomerLogin(){
    const[Username,setUsername] = useState("");
    const[Password,setPassword] = useState("");
    

    let [errorMsg,setErrorMsg] = useState("");

    function sendData(e){

        e.preventDefault();

        const newLogin = {
            Username,
            Password,
               
        }

        console.log(newLogin);
  
        axios.post("http://localhost:8070/customers/login",newLogin).then(()=>{
  
          Username(" ");
          Password("");
          
          Swal.fire({
            title: "Loarding",
            text: "You send the messege!",
            icon: "success",
            button: "ok!"
            
        });

    }).catch((err) =>{
        alert(err)
        
        setErrorMsg(err.response.data.error);
      })
    }
  
    return(
        <div className="login">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h4 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Customer login</h4>
            <br/><br/>
            <form  id="create-course-form">
            <div className="input-container">
                <label>Username </label>
                <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                        required
                        />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setPassword(e.target.value);
                         }}
                        required/>
            </div>
            <div className="button-container">
                <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Login</button>
            </div>
            <div className="button-container">
                <button type="reset" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}>Reset</button>
            </div>
            </form>
        </div>
        </div>
    )
    
    }