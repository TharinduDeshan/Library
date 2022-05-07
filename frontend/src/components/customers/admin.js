import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../../css/search.css"
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from "jquery";

export default function Admin(props) {
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


    //let [none, setNone] = useState("")
    let [errorText, seterrorText] = useState("")
    useEffect(() => {
        function getCustomers() {
          axios
            .get("http://localhost:8070/customers/get")
            .then((res) => {
                console.log(res.data)
                setCustomer(res.data)
                console.log(customer)

                $(document).ready(function () {

                  $('#example').DataTable();
  
              });
               
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
        <h2>Customer Informations</h2>
        <table class="table table-striped table-bordered text-center" id="example" >
        {/* <table> */}
          <thead>
            <tr>
              <th>NAME</th>
              <th>NIC</th>
              <th>PhoneNumber</th>
              <th>Address</th>
              <th>Email</th>
              <th>Occupcation</th>
              <th>Gender</th>
              <th>Member</th>
              <th>Action Button</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <tr>
                <td>{customer.Name}</td>
                <td>{customer.NIC}</td>
                <td>{customer.PhoneNumber}</td>
                <td>{customer.Email}</td>
                <td>{customer.Occupcation}</td>
                <td>{customer.Gender}</td>
                <td>{customer.Member}</td>
                <td>
                  <div className="col">
                    &ensp;
                    <button className="btn" style={{width:'47px'}}onClick={()=>updateCustomer(i._id)}>
                    
                    <img id="img141" src={p10} style={{width:'100%'}}/>

                    </button>
                    <button className="btn" style={{width:'47px'}}onClick={()=>deleteCustomer(i._id)}>
                    
                    <img id="img141" src={p11} style={{width:'100%'}}/>

                    </button>
                    
                  </div>
                </td>               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
