import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProfile(){

    const[members,setMembers] = useState("");

    let [succMsg,setSuccMsg] = useState("");
    let [Error2Msg,setError2Msg] = useState("");
    let [Err3Msg,setErr3Msg] = useState("");
  
    let [errorMsg,setErrorMsg] = useState("");
  
    let flag = 0;
  
    const [data, setData] = useState({
      // Quantity: "",
      // Price: "",
      // Category: "",
      // Description: "",
    });
  
      const[Username,setUsername] = useState("");     
      const[FirstName,setFirstName] = useState("");
      const[LastName,setLastName] = useState("");
      const[NIC,setNIC] = useState("");
      const[UserType,setUserType] = useState("");
      const[Password,setPassword] = useState("");
      const[ConfirmPassword,setConfirmPassword] = useState("");
  
      const {id} = useParams();
  
      useEffect(()=>{
          function getAccount(){
              axios.get("http://localhost:8070/account/get/" +id)
              .then((res)=>{
                  console.log(res)
                  setAccounts(res.data)
              }).catch((err)=>{
                  alert(err.errorMsg)    
              })
          }
          getAccount();
      },[])
  
     // console.log(items.Price)
  
  
  
        function updateAccount(e) {
     
          const objectId = id;
      
          e.preventDefault();
      
          const data = {
            Username,
            FirstName,
            LastName,
            NIC,
            UserType,
            Password,
            ConfirmPassword,
           
          }
  
          console.log(data);
        
            axios
            .patch("http://localhost:8070/accounts/update/" + objectId, data)
            .then(() => {
  
              setUsername(" ");
              setFirstName(" ");
              setLastName(" ");
              setNIC(" ");
              setUserType(" ");
              setPassword(" ");
              setConfirmPassword(" ");
        
      
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your data has been updated',
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
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                {/* <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"> */}
                    <span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span>
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Username</label>
                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.Username} enable />
                    </div>
                    <div class="col-md-6">
                    <label class="labels">FirstName</label>
                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.FirstName} enable />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                    <label class="labels">LastName</label>
                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.LastName} enable />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">NIC</label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.NIC} enable />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">UserType</label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.UserType} enable />
                    </div>
                    {/* <div class="col-md-12">
                        <label class="labels">Password</label>
                        <input type="password" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.Password} enable />
                    </div>   
                    <div class="col-md-12">
                        <label class="labels">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={accounts.ConfirmPassword} enable />

                    </div> */}
                    
                </div>
                <div class="row mt-3">
                <div class="mt-5 text-center"><button type="submit" className="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}>Save Profile</button></div> 
                </div>
                <div class="mt-5 text-center"><button type="reset" className="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button></div> 
                
                
                
            </div>
        </div>
        <div class="col-md-4">
       
    </div>
</div>
</div>


)

}