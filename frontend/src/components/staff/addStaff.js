import React, {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddStaff(){

    const[Username,setUsername] = useState("");
    const[Email,setEmail] = useState("");
    const[FirstName,setFirstName] = useState("");
    const[LastName,setLastName] = useState("");
    const[NIC,setNIC] = useState("");
    const[Telephone,setTelephone] = useState("");
    const[Password,setPassword] = useState("");

    let [errorMsg,setErrorMsg] = useState("");

    function sendData(e){

        e.preventDefault();
             
        const newStaff = {Username,Email,FirstName,LastName,NIC,Telephone,Password}
        console.log(newStaff);
  
        axios.post("http://localhost:8070/staff/add",newStaff).then(()=>{
  
          setUsername("");
          setEmail("");
          setFirstName("");
          setLastName("");
          setNIC("");
          setTelephone("");
          setPassword("");

            Swal.fire({
              title: "Good job!",
              text: "New Staff Member Saved!",
              icon: "success",
              button: "OK"    
          });
          e.target.reset();
        }).catch((err) =>{
          alert(err)
          
          setErrorMsg(err.response.data.error);
        })
      }

    return(

    <div >
        <div className="container" style={{width:'40%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Create Account</h2>
            <br/><br/>
            <form onSubmit = {sendData} id="create-course-form">
                <div className="row">
                    
    <div class="input-group form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setUsername(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Username<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="email"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setEmail(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>E-mail<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setFirstName(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>First Name<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setLastName(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Last Name<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setNIC(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>NIC<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="tel"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setTelephone(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Telephone<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="password"  style={{border:'1px solid #3F3232' }} 
         
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Password<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="password"  style={{border:'1px solid #3F3232' }} 
          onChange={(e)=>{ setPassword(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Confirm Password<span style={{color:'red'}}>*</span> </label>
    </div> 

                </div>
               

                <div className="row" >
                    <div className="col-sm">
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Fields with * is Compulsory !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                    <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right'}}>Submit</button>
                    <button type="reset" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right', marginRight:'30px'}}>Clear</button>

                    </div>
                </div>
            </form>
        </div>
        </div>
    )

}
