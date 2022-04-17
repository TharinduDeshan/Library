import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function EditCustomer(){

  const[customers,setCustomers] = useState("");

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



    const[ CustomerID,setCustomerID] = useState("");
    const[Name,setName] = useState("");
    const[NIC,setNIC] = useState("");
    const[PhoneNumber,setPhoneNumber] = useState("");
    const[Address,setAddress] = useState("");
    const[Email,setEmail] = useState("");
    const[Occupcation,setOccupcation] = useState("");
    const[Gender,setGender] = useState("");
    const[Member,setMember] = useState("");

    useEffect(()=>{
        function getCustomers(){
            axios.get("http://localhost:8070/customers/get/625bb469a0a36ec8f5047dae")
            .then((res)=>{
                console.log(res)
                setCustomers(res.data)
            }).catch((err)=>{
                alert(err.errorMsg)    
            })
        }
        getCustomers();
    },[])

   // console.log(items.Price)



      function updateCustomer(e) {
   
        const objectId = "625bb469a0a36ec8f5047dae";
    
        e.preventDefault();
    
        const data = {
          CustomerID,
          Name,
          NIC,
          PhoneNumber,
          Address,
          Email,
          Occupcation,
          Gender,
          Member
        }

        console.log(data);
      
          axios
          .patch("http://localhost:8070/customers/update/" + objectId, data)
          .then(() => {

            setCustomerID(" ");
            setName(" ");
            setNIC(" ");
            setPhoneNumber(" ");
            setAddress(" ");
            setEmail(" ");
            setOccupcation(" ");
            setGender(" ");
            setMember(" ");
  
    
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

        <div className="customer">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>

            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit the {customers.Category}</h2>
            <br/><br/>
            <form onSubmit = {updateCustomer} id="create-course-form">
                <div className="row">

                    <div className="col-sm-4">
                        <label for="Inputc-id" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer ID  </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={customers.CustomerID} />
                    </div>

                    <div className="col-sm-4">
                        <label for="Input-name" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer Name </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Name} 
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                    </div>

                    <div className="col-sm-4">
                        <label for="Input-nic" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>NIC</label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.NIC} 
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
                        placeholder={customers.PhoneNumber} 
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-address" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Address <span style={{color:'red'}}>*</span></label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Address} 
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-email" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span> </label>
                        <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Email} 
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
                        placeholder={customers.Occupcation} 
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
                            <option value="Male" selected={customers.Gender=='Male'}>Male</option>
                            <option value="Female" selected={customers.Gender=='Female'}>Female</option>
                        </select>

                    </div>
                    <div className="col-sm-4">
                        <label for="Input-member" className="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member<span style={{color:'red'}}>*</span> </label>
                        <select class="form-select" aria-label="Default select example" style={{color:'#3F3232',border:'1px solid #3F3232'}}
                         onChange={(e)=>{
                             setMember(e.target.value);
                         }}
                         required>
                            <option selected>Select Membership status</option>
                            <option value="Yes" selected={customers.Member=='Yes'}>Yes</option>
                            <option value="No" selected={customers.Member=='No'}>No</option>
                        </select>
    
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
