import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../css/search.css"

import p3 from "../../images/book1.jpg";
import p4 from "../../images/book2.jpg";
import p5 from "../../images/book3.jpg";
import p6 from "../../images/book4.jpg";
import p7 from "../../images/book5.jpg";
import p8 from "../../images/book6.jpg";

import p10 from "../../images/edit.png";
import p11 from "../../images/trash.png";
import p12 from "../../images/loupe.png";

export default function StaffCategory(props) {


    // const p3 = "../../images/book1.jpg"
    const[title,setTitle] = useState("");
    // let item = [];
    let [item, setitem] = useState([]);
    let [Category, setCategory] = useState([]);

    let topic = "";

    const history = useNavigate();
    const {type} = useParams();
    console.log(type)

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
                    items.Category ===type
                );

                if(filter.length != 0){
                  setNone("")
                }
                else if(filter.length == 0){
                    setNone("No Items Found")
                }

                 console.log(filter)
                 setitem(filter)

                 setCategory(type)
            })
            .catch((err) => {
              alert(err);
            });
        }
    
        getItems();
      }, []);

      function updateItem(id){
        console.log(id)

        history(`/staff/editItem/${id}`)
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
              .delete("http://localhost:8070/items/delete/" + id)
              .then((res) => {

                Swal.fire("Deleted!", "Your file has been deleted.", "success");

            })
            .catch((err) => {
              alert(err);
            });            
            }
          });
      }

    function filterContent(data, userSearch) {
        // console.log(result)
        let result = data.filter(
          (post) =>
            post.Title.toLowerCase().includes(userSearch)
        );
        console.log(userSearch);
        console.log(result)
        setitem(result)
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
    
      // search
      function handleSearch(e) {
        let userSearch = e;
        //document.getElementsByTagName("CircleLoader").loading = '{true}';
        // document.getElementById("itemsTxt").innerHTML = "";
    
        axios
          .get("http://localhost:8070/items/get")
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

      function filterItems(type){
        //   alert('asd')

          axios
          .get("http://localhost:8070/items/get")
          .then((res) => {
              console.log(res.data)

              const filter = res.data.filter(
                  (items)=>
                  items.Category === type
              );

              setCategory(type)

               console.log(filter)
               setitem(filter)

               if(filter.length != 0){
                setNone("")
                }
                else if(filter.length == 0){
                    setNone("No Items Found")
                }

          })
          .catch((err) => {
            alert(err);
          });
      }


  return (

    <div  style={{color:'#3F3232'}}>
            <div className="searchbaar">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar" >
                            <input className="search_input" type="text" name="" 
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
            <div className="row">
                
                <div className="col-3" style={{color:'#3F3232', fontWeight:'bold', marginLeft:'80px', width:'20%'}}>
<br/><br/>
                    <h4>Other Categories</h4>
                    <span id="link" onClick={()=>filterItems("Books")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}} id="link" className="list-group-item list-group-item-action" >
                            Books
                        </a>
                    </span>
                    <span id="link" onClick={()=>filterItems("Childrens Books")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            Childrens Books
                        </a>
                    </span>
                    <span id="link" onClick={()=>filterItems("Magazines")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            Magazines
                        </a>
                    </span>
                    <span id="link"  onClick={()=>filterItems("Articles")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            Articles
                        </a>
                    </span>
                    <span id="link"  onClick={()=>filterItems("News Papers")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            News Papers
                        </a>
                    </span>
                    <span id="link"  onClick={()=>filterItems("Musics")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            Musics
                        </a>
                    </span>
                    <span id="link"  onClick={()=>filterItems("Movies & Comic Books")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            Movies & Comic Books
                        </a>
                    </span>
                    <span id="link"  onClick={()=>filterItems("Educational")}>
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto', width:'80%'}}  id="link" className="list-group-item list-group-item-action" >
                            Educational
                        </a>
                    </span>
                

                </div>
                <div className="col-8">
                <h3> &ensp;&ensp; {Category}</h3>
                <br/>
                <div className="row">
                    <div className = "col-md-12 ">
                        <h4 className = "text-danger">{errorText}</h4>
                        <h4 className = "text-danger">{none}</h4>
                   
                    </div>
        {item.map((i)=>{
            return(
                
                <div className="col-3 text-center">
                
                   
                    <img className="img-fluid" alt="Responsive " style={{width:'45%', marginBottom:'5px'}}
                    src={"/Images/" + i.Images}
                    //  onError={(e) => {
                    //     e.target.onerror = null;
                    //     e.target.src = {p3};
                    //   }}
                      />
                    <br/>
                    <span style={{fontWeight:'bold', float:'center'}}>{i.Title}</span>
                    <div className="col">
                    &ensp;
                    <button className="btn" style={{width:'47px'}}
                    onClick={()=>updateItem(i._id)}
                    >
                         <img id="img141" src={p10} style={{width:'100%'}}/>
                    </button>
                    <button className="btn" style={{width:'47px'}}
                    onClick={()=>deleteItem(i._id)}
                    >
                        <img id="img141" src={p11} style={{width:'100%'}}/>
                    </button>
                    
                    </div>
                    <br/>
                </div>
               
              
            )
        })}
          
            </div>
            <br/>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>

  );
}
