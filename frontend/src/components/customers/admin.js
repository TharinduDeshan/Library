import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../../css/search.css"

export default function Admin(props) {
    const[title,setTitle] = useState("");

    // const[customerID,setcustomerID] = useState("");
    const[itemIDs,setitemIDs] = useState("");
    const[orderDate,setorderDate] = useState("");
    // let item = [];
    let [item, setitem] = useState([]);
    let [Category, setCategory] = useState([]);
    let [ItemIds, setItemIds] = useState([]);

    let topic = "";
    // let [name, setName] = useState("")
    let [none, setNone] = useState("")
    let [errorText, seterrorText] = useState("")
    useEffect(() => {
        function getItems() {
          axios
            .get("http://localhost:8070/items/get")
            .then((res) => {
                console.log(res.data)

                const filter = res.data.filter(
                    (items)=>
                    items.Category ==="Books"   //temporary category
                );

                 console.log(filter)
                 setitem(filter)

               
            })
            .catch((err) => {
              alert(err);
            });
        }
    
        getItems();
      }, []);

return (
      <div>
          <p>hello</p>
      </div>
        
    // <div  style={{color:'#3F3232'}}>
    // <div className="searchbaar">
    //     <div className="container h-100">
    //         <div className="d-flex justify-content-center h-100">
    //             <div className="searchbar" >
    //                 <input className="search_input" type="text" name="" 
    //                 onChange={(e) => handleSearch(e.target.value)}
    //                 />
    //                 <a type="button" className="search_icon"  >
    //                 <img id="img141" src={p12} />
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // </div>             

  );
}
