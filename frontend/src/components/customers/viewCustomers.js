import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../css/search.css"
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from "jquery";

import p10 from "../../images/edit.png";
import p11 from "../../images/trash.png";

export default function ViewCustomers(props) {
    const[CustomerID,setCustomerID] = useState("");
    const[Name,setName] = useState("");
    const[NIC,setNIC] = useState("");
    const[PhoneNumber,setPhoneNumber] = useState("");
    const[Address,setAddress] = useState("");
    const[Email,setEmail] = useState("");
    const[Occupcation,setOccupcation] = useState("");
    const[Gender,setGender] = useState("");
    const[Member,setMember] = useState("");

    const[customer,setCustomer] = useState([]);
    let[customerDetails,setCustomerDetails] = useState([]);
    
    const history = useNavigate();
    //let [none, setNone] = useState("")
    let [errorText, seterrorText] = useState("")

    useEffect(() => {
        function getCustomers() {
          axios
            .get("http://localhost:8070/customers/get")
            .then((res) => {
                console.log(res.data)
                setCustomerDetails(res.data)
                console.log(customerDetails)
               
            })
            .catch((err) => {
              alert(err);
            });
        }
    
        getCustomers();
      }, []);

      function deleteCustomer(id){
        console.log(id)
  
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              
              axios
              .delete("http://localhost:8070/customers/delete/" + id)
              .then((res) => {

                Swal.fire("Deleted!", "Your file has been deleted.", "success");

            })
            .catch((err) => {
              alert(err);
            });            
            }
          });
      }

      function updateCustomer(id){
        console.log(id)

        history(`/staff/editCustomer/${id}`)
      }


return (
        <div className="customer" key={customer.CustomerID}>
        
        <div className="row" >
        <div className="col-sm-2">
        <button style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}><a href="/staff/addCustomer">Add New Customer</a></button>
        </div>
        <div className="col-sm-10">
        <h2>Customer Informations</h2>
        </div>
        </div>

        <div className="row" >
        <div className="col-sm-12">
        <table class="table table-striped table-bordered text-center" id="example" >
          <thead>
            <tr>             
              <th>NAME</th>
              <th>NIC</th>
              <th>PHONE NUMBER</th>
              <th>ADDRESS</th>
              <th>EMAIL</th>
              <th>OCCUPCATION</th>
              <th>GENDER</th>
              <th>MEMBER</th>
              <th>ACTION BUTTON</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails.map((customer) => (
            
              <tr>                
                <td>{customer.Name}</td>
                <td>{customer.NIC}</td>
                <td>{customer.PhoneNumber}</td>
                <td>{customer.Address}</td>
                <td>{customer.Email}</td>
                <td>{customer.Occupcation}</td>
                <td>{customer.Gender}</td>
                <td>{customer.Member}</td>
                <td>
                  <div className="col">
                    &ensp;
                    <button className="btn" style={{width:'47px'}}onClick={()=>updateCustomer(customer._id)}>
                    
                    <img id="img141" src={p10} style={{width:'100%'}}/>

                    </button>
                    <button className="btn" style={{width:'47px'}}onClick={()=>deleteCustomer(customer._id)}>
                    
                    <img id="img141" src={p11} style={{width:'100%'}}/>

                    </button>
                    
                  </div>
                </td>               
              </tr>
            ))}
          </tbody>
          
        </table>
        </div>
        </div>
      </div>
  );
}
