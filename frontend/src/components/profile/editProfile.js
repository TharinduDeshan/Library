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
                    <div class="col-md-6"><label class="labels">Name</label>
                        {/* <input type="text" class="form-control" placeholder="first name" value="">                        */}
                        </div>
                    <div class="col-md-6"><label class="labels">Address</label>
                    {/* <input type="text" class="form-control" value="" placeholder="surname">                        */}
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">PhoneNumber</label>
                    {/* <input type="text" class="form-control" placeholder="enter phone number" value="">      */}
                    </div>
                    <div class="col-md-12"><label class="labels">NIC</label>
                    {/* <input type="text" class="form-control" placeholder="enter address line 1" value="">                        */}
                    </div>
                    <div class="col-md-12"><label class="labels">Occupcation</label>
                    {/* <input type="text" class="form-control" placeholder="enter address line 2" value=""> */}
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Membership ID</label>
                    {/* <input type="text" class="form-control" placeholder="enter address line 2" value=""> */}
                    </div>   
                    <div class="col-md-12">
                        <label class="labels">Email</label>
                    {/* <input type="text" class="form-control" placeholder="enter email id" value=""> */}

                    </div>
                    
                </div>
                <div class="row mt-3">
                    
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
       
    </div>
</div>
</div>


)

}