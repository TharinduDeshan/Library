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

    const history = useNavigate();
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

      function deleteMember(id){
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
              .delete("http://localhost:8070/members/delete/" + id)
              .then((res) => {

                Swal.fire("Deleted!", "Your file has been deleted.", "success");

            })
            .catch((err) => {
              alert(err);
            });            
            }
          });
      }

      function updateMember(id){
        console.log(id)

        history(`/staff/editMember/${id}`)
      }


return (
      <div className="customer" key={member.MemberID}>
        <h2>Members Informations</h2>
        <table class="table table-striped table-bordered text-center" id="example" >
        {/* <table> */}
          <thead>
            <tr>
              <th>NAME</th>
              <th>NIC</th>
              <th>PHONE NUMBER</th>
              <th>ADDRESS</th>
              <th>EMAIL</th>
              <th>OCCUPCATION</th>
              <th>GENDER</th>
              <th>REGISTRED DATE</th>
              <th>ACTION BUTTON</th>
            </tr>
          </thead>
          <tbody>
            {member.map((member) => (
              <tr>
                <td>{member.Name}</td>
                <td>{member.NIC}</td>
                <td>{member.PhoneNumber}</td>
                <td>{member.Address}</td>
                <td>{member.Email}</td>
                <td>{member.Occupcation}</td>
                <td>{member.Gender}</td>
                <td>{member.RegistredDate}</td> 
                <td>
                  <div className="col">
                    &ensp;
                    <button className="btn" style={{width:'47px'}}onClick={()=>updateMember(member._id)}>
                    
                    <img id="img141" src={p10} style={{width:'100%'}}/>

                    </button>
                    <button className="btn" style={{width:'47px'}}onClick={()=>deleteMember(member._id)}>
                    
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
