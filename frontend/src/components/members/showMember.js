import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../../css/search.css"
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from "jquery";

export default function ShowMember(props) {
    const[MemberID,setMemberID] = useState("");
    const[Name,setName] = useState("");
    const[NIC,setNIC] = useState("");
    const[PhoneNumber,setPhoneNumber] = useState("");
    const[Address,setAddress] = useState("");
    const[Email,setEmail] = useState("");
    const[Occupcation,setOccupcation] = useState("");
    const[Gender,setGender] = useState("");
    const[RegistredDate,setRegistredDate] = useState("");

    const[member,setMember] = useState([]);


    //let [none, setNone] = useState("")
    let [errorText, seterrorText] = useState("")
    useEffect(() => {
        function getMembers() {
          axios
            .get("http://localhost:8070/members/get")
            .then((res) => {
                console.log(res.data)
                setMember(res.data)
                console.log(member)

                $(document).ready(function () {

                  $('#example').DataTable();
  
              });
               
            })
            .catch((err) => {
              alert(err);
            });
        }
    
        getMembers();
      }, []);

return (
      <div className="customer" key={member.MemberID}>
        <h2>Members Informations</h2>
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
              <th>Registred Date</th>
            </tr>
          </thead>
          <tbody>
            {member.map((member) => (
              <tr>
                <td>{member.Name}</td>
                <td>{member.NIC}</td>
                <td>{member.PhoneNumber}</td>
                <td>{member.Email}</td>
                <td>{member.Occupcation}</td>
                <td>{member.Gender}</td>
                <td>{member.RegistredDate}</td>               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
