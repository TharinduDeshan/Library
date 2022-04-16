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
            axios.get("http://localhost:8070/customers/get/623729699d9796c7d397cb8f")
            .then((res)=>{
                console.log(res)
                setItems(res.data)
            }).catch((err)=>{
                alert(err.errorMsg)    
            })
        }
        getCustomers();
    },[])

   // console.log(items.Price)



      function updateCustomer(e) {
   
        const objectId = "623729699d9796c7d397cb8f";
    
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

            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit the {customer.Category}</h2>
            <br/><br/>
            <form onSubmit = {updateCustomer} id="create-course-form">
                <div className="row">

                    <div className="col-sm-4">
                        <label for="Inputc-id" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer ID  </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={customers.CID} readonly/>
                    </div>

                    <div className="col-sm-4">
                        <label for="Input-name" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer Name </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Name} 
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        />
                    </div>

                    <div class="col-sm-4">
                        <label for="Input-nic" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>NIC</label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.NIC} 
                        onChange={(e) => {
                            setNIC(e.target.value);
                        }}
                        />
                    </div>

                </div>
                <br/><br/>
                <div className="row">
                    <div class="col-sm-4">
                        <label for="Input-phone" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Phone Number <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.PhoneNumber} 
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                        />
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-address" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Address <span style={{color:'red'}}>*</span></label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Address} 
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        />
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-email" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Email} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        />
                    </div>
                </div>
                <br/><br/>

                <div className="row">
                    <div class="col-sm-4">
                        <label for="Input-occupcation" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Occupcation <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Occupcation} 
                        onChange={(e) => {
                            setOccupcation(e.target.value);
                        }}
                        />
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-gender" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Gender<span style={{color:'red'}}>*</span></label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Gender}
                       onChange={(e) => {
                        setGender(e.target.value);
                       }}
                       />

                    </div>
                    <div class="col-sm-4">
                        <label for="Input-member" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={customers.Member}
                       onChange={(e) => {
                        setMember(e.target.value);
                       }}
                       />
    
                    </div>
                </div>
                <br/><br/>

                <div className="row" >
                    <div className="col-sm" style={{float:'right'}}>
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled fields cannot be edited !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                        <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}
                        // onClick={() => updateItem(items._id)}
                        >Submit</button>
                       
                        <button type="reset" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button>
                        
                    </div>
                </div>
                
            </form>
        </div>
            
     </div>
    )

}
