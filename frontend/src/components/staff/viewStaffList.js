import { useState, useEffect } from 'react'
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
 

export default function StaffList(){
    const [staffList, setStaffList] = useState([]);
 
    useEffect(() => {
        getStaffList();
    }, []);
 
    const getStaffList = async () => {
        const response = await axios.get('http://localhost:8070/staff/get');
        setStaffList(response.data);
    }
 
    return (
        <div className="container" style={{width:'80%'}}>
              <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Staff List</h2>
            <br/><br/>
            {/* <Link to="/add" className="button is-primary mt-2">Add New</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>NIC</th>
                        <th>E-mail</th>
                        <th>Telephone</th>

                    </tr>
                </thead>
                <tbody>
                    { staffList.map((staff, index) => (
                        <tr key={ staff._id }>
                            <td>{ staff.Username }</td>
                            <td>{ staff.FirstName }</td>
                            <td>{ staff.LastName }</td>
                            <td>{ staff.NIC }</td>
                            <td>{ staff.Email }</td>
                            <td>{ staff.Telephone }</td>

                            <td className="alignv" >
                                <Link to={`/staff/editStaff/${staff._id}`} className="btn btn-warning">Update</Link>
                                {/* <button className="btn btn-success" onClick={updateQuestion(question.id) }>Update</button> */}
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 