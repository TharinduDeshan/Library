import { useState, useEffect } from 'react'
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import p12 from "../../images/loupe.png";

export default function StaffList(){
    const [staffList, setStaffList] = useState([]);
    let [errorText, seterrorText] = useState("")

    useEffect(() => {
        getStaffList();
    }, []);
 
    const getStaffList = async () => {
        const response = await axios.get('http://localhost:8070/staff/get');
        setStaffList(response.data);
    }

    function handleSearch(e) {

        let userSearch = e;
        //document.getElementsByTagName("CircleLoader").loading = '{true}';
        // document.getElementById("itemsTxt").innerHTML = "";
    
        axios
          .get("http://localhost:8070/staff/get")
          .then((res) => {
            // console.log(res.data);
    
            if (userSearch != null) {
              filterContent(res.data, userSearch);
            }
          })
          .catch((err) => {
            alert(err);
          });
      }
      function filterContent(data, userSearch) {
       
        let result = data.filter(
          (post) =>
            post.Username.toLowerCase().includes(userSearch)
        );
        console.log(userSearch);
        console.log(result)
        setStaffList(result)
        let x = result;
        // getItems(r, x);
        if (result.length != 0) {
        //   document.getElementById("itemsTxt").innerHTML = "";
        seterrorText("")
        } else if (result.length == 0) {
        //   document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        seterrorText("No Result Found")
        }
      }
    function deleteItem(id){
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
              .delete("http://localhost:8070/staff/delete/" + id)
              .then((res) => {

                Swal.fire("Deleted!", "Staff Member has been deleted.", "success");
                getStaffList();
            })
            .catch((err) => {
              alert(err);
            });            
            }
          });
      }
    return (
        <div className="container" style={{width:'60%'}}>
           
            
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Staff List</h2>
            <br/>
            <div className="searchbaar">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar" >
                            <input className="search_input" placeholder="Search by Username..." type="text" name="" 
                            onChange={(e) => handleSearch(e.target.value)}
                            />
                            <a type="button" className="search_icon"  >
                            <img id="img141" src={p12} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            {/* <Link to="/add" className="button is-primary mt-2">Add New</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>NIC</th>
                        <th>Actions</th>
                        {/* <th>E-mail</th> */}
                        {/* <th>Telephone</th> */}

                    </tr>
                </thead>
                <tbody>
                    { staffList.map((staff, index) => (
                        <tr key={ staff._id }>
                            <td>{ staff.Username }</td>
                            <td>{ staff.FirstName }</td>
                            <td>{ staff.LastName }</td>
                            <td>{ staff.NIC }</td>
                            {/* <td>{ staff.Email }</td> */}
                            {/* <td>{ staff.Telephone }</td> */}

                            <td className="alignv" >
                                <Link to={`/staff/view/${staff._id}`} className="btn btn-primary" style={{marginRight:'5px'}}>View</Link>
                                <Link to={`/staff/editStaff/${staff._id}`} className="btn btn-warning" style={{marginRight:'5px'}}>Update</Link>
                                <button onClick={()=>deleteItem(staff._id)} className="btn btn-danger">Delete</button>
                                {/* <button className="btn btn-success" onClick={updateQuestion(question.id) }>Update</button> */}
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <div className="row">
                        <h6 className = "text-danger text-center">{errorText}</h6>
                        </div>
        </div>
    )
}
 