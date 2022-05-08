import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {  useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function UpdateStaff(){

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


      function updateItem(e) {

        e.preventDefault();
    
        const staff = {Username,Email,FirstName,LastName,NIC,Telephone}

          axios
          .put("http://localhost:8070/staff/update/" + id, staff)
          .then(() => {
 
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Staff Details has been updated',
              showConfirmButton: false,
              timer: 1500
            })
    
            // props.history.push("/customers/home");
      
          })
          .catch((err) => {
            alert(err);
       
          });
        
        
      }

    return(

        <div >
        <div className="container" style={{width:'40%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Update Staff Details</h2>
            <br/><br/>
            <form onSubmit = {updateItem} id="create-course-form">
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
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>E-mail<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
         value ={FirstName}
          onChange={(e)=>{ setFirstName(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>First Name<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
         value ={LastName}
          onChange={(e)=>{ setLastName(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Last Name<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="text"  style={{border:'1px solid #3F3232' }} 
         value ={NIC}
          onChange={(e)=>{ setNIC(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>NIC<span style={{color:'red'}}>*</span> </label>
    </div> 

    <div class="form-floating mb-3">
        <input type="tel"  style={{border:'1px solid #3F3232' }} 
         value ={Telephone}
          onChange={(e)=>{ setTelephone(e.target.value);}} 
          required class="form-control" id="username" placeholder="Username"/>
        <label for="username" style={{color:'#3F3232', fontWeight:'bold' ,marginLeft:'10px'}}>Telephone<span style={{color:'red'}}>*</span> </label>
    </div> 
   </div>
               

                <div className="row" >
                    <div className="col-sm">
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled fields cannot be edited !</span>

                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                    {/* <Link style={{marginRight:'10px'}} to={`/staff/all`} className="btn btn-primary">Staff List</Link> */}

                    <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right'}}>Submit</button>
                    <button type="reset" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right', marginRight:'10px'}}>Clear</button>

                    </div>
                </div>
            </form>
        </div>
        </div>
    )

}
