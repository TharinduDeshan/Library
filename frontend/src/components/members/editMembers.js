import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditMember(){

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



    const[ MemberID,setMemberID] = useState("");
    const[Name,setName] = useState("");
    const[NIC,setNIC] = useState("");
    const[PhoneNumber,setPhoneNumber] = useState("");
    const[Address,setAddress] = useState("");
    const[Email,setEmail] = useState("");
    const[Occupcation,setOccupcation] = useState("");
    const[Gender,setGender] = useState("");
    const[RegistredDate,setRegistredDate] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        function getMembers(){
            axios.get("http://localhost:8070/members/get/" +id)
            .then((res)=>{
                console.log(res)
                setMembers(res.data)
            }).catch((err)=>{
                alert(err.errorMsg)    
            })
        }
        getMembers();
    },[])

   // console.log(items.Price)



      function updateMember(e) {
   
        const objectId = id;
    
        e.preventDefault();
    
        const data = {
          MemberID,
          Name,
          NIC,
          PhoneNumber,
          Address,
          Email,
          Occupcation,
          Gender,
          RegistredDate
        }

        console.log(data);
      
          axios
          .patch("http://localhost:8070/members/update/" + objectId, data)
          .then(() => {

            setMemberID(" ");
            setName(" ");
            setNIC(" ");
            setPhoneNumber(" ");
            setAddress(" ");
            setEmail(" ");
            setOccupcation(" ");
            setGender(" ");
            setRegistredDate(" ");
  
    
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

        <div className="member">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>

            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit Member Details {members.Category}</h2>
            <br/><br/>
            <form onSubmit = {updateMember} id="create-course-form">
                <div className="row">

                    <div className="col-sm-4">
                        <label for="Inputc-id" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member ID  </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={members.MemberID} disabled />
                    </div>

                    <div className="col-sm-4">
                        <label for="Input-name" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member Name </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.Name} 
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                    </div>

                    <div className="col-sm-4">
                        <label for="Input-nic" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>NIC</label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.NIC} 
                        onChange={(e) => {
                            setNIC(e.target.value);
                        }}
                        />
                    </div>

                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-sm-4">
                        <label for="Input-phone" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Phone Number <span style={{color:'red'}}>*</span> </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.PhoneNumber} 
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-address" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Address <span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.Address} 
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-email" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span> </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.Email} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        />
                    </div>
                </div>
                <br/><br/>

                <div className="row">
                    <div className="col-sm-4">
                        <label for="Input-occupcation" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Occupcation <span style={{color:'red'}}>*</span> </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.Occupcation} 
                        onChange={(e) => {
                            setOccupcation(e.target.value);
                        }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-gender" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Gender<span style={{color:'red'}}>*</span></label>
                        <select class="form-select"  aria-label="Default select example" style={{color:'#3F3232',border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setGender(e.target.value);
                         }}
                         required>
                            
                            <option >Select the Gender</option>
                            <option value="Male" selected={members.Gender=='Male'}>Male</option>
                            <option value="Female" selected={members.Gender=='Female'}>Female</option>
                        </select>

                    </div>
                    <div className="col-sm-4">
                        <label for="Input-member" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Registred Date<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={members.RegistredDate}  />
    
                    </div>
                </div>
                <br/><br/>

                <div className="row" >
                    <div className="col-sm" style={{float:'right'}}>
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled fields cannot be edited !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                        <button type="submit" className="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}
                        // onClick={() => updateItem(items._id)}
                        >Submit</button>
                       
                        <button type="reset" className="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button>
                        
                    </div>
                </div>
                
            </form>
        </div>
            
     </div>
    )

}
