import React, {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddMembers(){

    const[MemberID,setMemberID] = useState("");
    const[Name,setName] = useState("");
    const[NIC,setNIC] = useState("");
    const[PhoneNumber,setPhoneNumber] = useState("");
    const[Address,setAddress] = useState("");
    const[Email,setEmail] = useState("");
    const[Occupcation,setOccupcation] = useState("");
    const[Gender,setGender] = useState("");
    const[RegistredDate,setRegistredDate] = useState("");

    let [errorMsg,setErrorMsg] = useState("");

    function sendData(e){

        e.preventDefault();

        const newMember = {
            MemberID,
            Name,
            NIC,
            PhoneNumber,
            Address,
            Email,
            Occupcation,
            Gender,
            RegistredDate,
            
        }

        console.log(newMember);
  
        axios.post("http://localhost:8070/members/add",newMember).then(()=>{
  
          setMemberID(" ");
          setName("");
          setNIC(" ");
          setPhoneNumber(" ");
          setAddress(" ");
          setEmail(" ");
          setOccupcation(" ");
          setGender(" ");
          setRegistredDate(" ");

          Swal.fire({
            title: "Good job!",
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

        <div className="member">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Add a New member</h2>
            <br/><br/>
            <form  id="create-course-form">
                <div className="row">
                    <div className="col-sm-4">
                        <label for="Inputc-id" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member ID </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        onChange={(e)=>{
                            setMemberID(e.target.value);
                        }}
                        required
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-name" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Member Name </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setName(e.target.value);
                         }}
                        required/>
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-nic" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Member NIC </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setNIC(e.target.value);
                         }}
                        required/>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                <div class="col-sm-4">
                        <label for="Input-phone" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Phone Number <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setPhoneNumber(e.target.value);
                         }}
                        required/>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-address" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Address <span style={{color:'red'}}>*</span></label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setAddress(e.target.value);
                         }}
                        required/>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-email" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setEmail(e.target.value);
                         }}
                        required/>
                    </div>
                </div>
                <br/><br/>

                <div className="row">
                <div class="col-sm-4">
                        <label for="Input-occupcation" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Occupcation <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setOccupcation(e.target.value);
                         }}

                        required/>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-gender" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Gender<span style={{color:'red'}}>*</span></label>
                        <select class="form-select" aria-label="Default select example" style={{color:'#3F3232',border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setGender(e.target.value);
                         }}
                         required>
                            
                            <option selected>Select the Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-member" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Registred Date<span style={{color:'red'}}>*</span> </label>
                        <input type="date" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setRegistredDate(e.target.value);
                        }}
                        required/>
    
                    </div>
                </div>
                <br/><br/>

                <div className="row" >
                    <div className="col-sm-6">
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Fields with * is Compulsary !</span>
                    </div>
                    <div className="col-sm-6" style={{float:'right'}}>
                        <div className="col-sm-3" style={{float:'right'}}>
                            <button type="reset" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}>Clear</button>
                        </div>
                        <div className="col-sm-3" style={{float:'right'}}>
                            <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}} onClick={sendData}>Submit</button>
                        </div>
                    
                    </div>
                </div>
                <div></div>
            </form>
        </div>

        <br/><br/><br/><br/><br/><br/>
        </div>

    )
}

    



