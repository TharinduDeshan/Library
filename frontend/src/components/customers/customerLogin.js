// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function CustomerLogin(){
//     let [succMsg,setSuccMsg] = useState("");
//     let [Error2Msg,setError2Msg] = useState("");
//     let [Err3Msg,setErr3Msg] = useState("");
  
//     let [errorMsg,setErrorMsg] = useState("");
  
//     let flag = 0;
  
//     const [data, setData] = useState({
//       // Quantity: "",
//       // Price: "",
//       // Category: "",
//       // Description: "",
//     });
  
//     return(
//         <div className="form">
//             <form onSubmit={handleSubmit}>
//             <div className="input-container">
//                 <label>Username </label>
//                 <input type="text" name="uname" required />
//                     {renderErrorMessage("uname")}
//             </div>
//             <div className="input-container">
//                 <label>Password </label>
//                 <input type="password" name="pass" required />
//                 {renderErrorMessage("pass")}
//             </div>
//             <div className="button-container">
//                 <input type="submit" />
//             </div>
//             </form>
//         </div>
      
//     )  
    
// }