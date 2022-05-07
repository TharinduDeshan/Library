import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../../css/search.css"

// import "datatables.net-dt/js/dataTables.dataTables"

// import "datatables.net-dt/css/jquery.dataTables.min.css"

// import $ from "jquery";

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

    const[customer,setCustomer] = useState("");


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

              //   $(document).ready(function () {

              //     $('#example').DataTable();
  
              // });
               
            })
            .catch((err) => {
              alert(err);
            });
        }
    
        getCustomers();
      }, []);

return (
      <div className="customer" key={customer.CustomerID}>
        <h2>Customer Informations</h2>
        {/* <table class="table table-striped table-bordered text-center" id="example" > */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>NIC</th>
              <th>PhoneNumber</th>
              <th>Address</th>
              <th>Email</th>
              <th>Occupcation</th>
              <th>Gender</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <tr>
                <td>{customer.CustomerID}</td>
                <td>{customer.Name}</td>
                <td>{customer.NIC}</td>
                <td>{customer.PhoneNumber}</td>
                <td>{customer.Email}</td>
                <td>{customer.Occupcation}</td>
                <td>{customer.Gender}</td>
                <td>{customer.Member}</td>               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
