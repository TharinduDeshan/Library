import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/search.css"

import p3 from "../../images/book1.jpg"
import p4 from "../../images/book2.jpg";
import p5 from "../../images/book3.jpg";
import p6 from "../../images/book4.jpg";
import p7 from "../../images/book5.jpg";
import p8 from "../../images/book6.jpg";

import p10 from "../../images/edit.png";
import p11 from "../../images/trash.png";
import p12 from "../../images/loupe.png";

export default function StaffCategory(props) {

    // const[item,setItem] = useState("");

    const[title,setTitle] = useState("");
    // let item = [];
    let [item, setitem] = useState([]);

    let topic = "";


    useEffect(() => {
        function getItems() {
          axios
            .get("http://localhost:8070/items/get")
            .then((res) => {
                console.log(res.data)

                const filter = res.data.filter(
                    (items)=>
                    items.Category ==="Books"
                );

         

                 console.log(filter)
                 setitem(filter)

                //  for(let i=0;i<item.length;i++){

                //     console.log(item[i].Title)
                //     setTitle(item[i].Title)
         
                // }
            })
            .catch((err) => {
              alert(err);
            });
        }
    
        getItems();
      }, []);

      function updateItem(id){
        console.log(id)

        let ItemID = localStorage.getItem("ItemID");

        props.history.push("/items/editItems.js")
      }

    // function filterContent(data, userSearch) {
    //     let result = data.filter(
    //       (post) =>
    //         post.Item_name.toLowerCase().includes(userSearch) ||
    //         post.Brand.toLowerCase().includes(userSearch) ||
    //         post.Model.toLowerCase().includes(userSearch)
    //     );
    //     console.log(userSearch);
    //     let x = result;
    //     // getItems(r, x);
    //     if (result.length != 0) {
    //       document.getElementById("itemsTxt").innerHTML = "";
    //     } else if (result.length == 0) {
    //       document.getElementById("itemsTxt").innerHTML = "No Result Found!";
    //     }
    //   }
    
    //   // search
    //   function handleSearch(e) {
    //     let userSearch = e;
    //     //document.getElementsByTagName("CircleLoader").loading = '{true}';
    //     document.getElementById("itemsTxt").innerHTML = "";
    
    //     axios
    //       .get("http://localhost:8070/items/get")
    //       .then((res) => {
    //         // console.log(res.data);
    
    //         if (userSearch != null) {
    //           filterContent(res.data, userSearch);
    //         }
    //       })
    //       .catch((err) => {
    //         alert(err);
    //       });
    //   }


  return (

    <div  style={{color:'#3F3232'}}>
            <div className="searchbaar">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar" >
                            <input className="search_input" type="text" name="" 
                            // onChange={(e) => handleSearch(e.target.value)}
                            />
                            <a type="button" className="search_icon"  >
                            <img id="img141" src={p12} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           <br/><br/>
            <div className="row">
                
                <div className="col-3" style={{color:'#3F3232', fontWeight:'bold', marginLeft:'80px'}}>

                    <h4>Other Categories</h4>
                    <span id="link" >
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}} id="link" className="list-group-item list-group-item-action" >
                            Books
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Childrens Books
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Magazines
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Articles
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            News Papers
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Musics
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Movies & Comic Books
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Educational
                        </a>
                    </span>
                

                </div>
                <div className="col-8">
                <h3> &ensp; &ensp; Books</h3>
                <br/>
                <div className="row">
        {item.map((i)=>{
            return(
                
                <div className="col-3 text-center">
                
                   
                    <img  src = {p3}  className="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
                    <br/>
                    <span><b>{i.Title}</b></span>
                    <div className="col">
                    &ensp;
                    <button className="btn" style={{width:'50px'}}
                    onClick={()=>updateItem(i._id)}
                    >
                         <img id="img141" src={p10} style={{width:'100%'}}/>
                    </button>
                    <button className="btn" style={{width:'50px'}}>
                        <img id="img141" src={p11} style={{width:'100%'}}/>
                    </button>
                    
                    </div>
                   
                </div>
              
            )
        })}
          
</div>
<br/>
                {/* <div className="row text-center" style={{fontWeight:'bold'}}>
         
                    <div className="col ">
                      
                        <img  src = {p3}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>HellFiree</span>
                        <div className="col">
                        &ensp;&ensp;
                    
                         <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                      
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
                       
                    </div>

                    <div className="col ">
                    
                           
                        <img  src = {p4}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>PlayToys</span>
                        <div className="col">
                        &ensp;&ensp;
                        <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
                     
                    </div>

                    <div className="col ">
                    
                           
                        <img  src = {p5}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>Dune</span>
                        <div className="col">
                        &ensp;&ensp;
                        <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
                    
                    </div>

                    <div className="col ">
                    
                           
                        <img  src = {p6}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>Michel</span>
                        <div className="col">
                        &ensp;&ensp;
                        <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
       
                    </div>

                    
                </div>

                <br/>

                <div className="row text-center" style={{fontWeight:'bold'}}>
                    
                <div className="col ">
                    
                           
                        <img  src = {p7}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>Lord Of the Rings</span>
                        <div className="col">
                        &ensp;&ensp;
                        <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
                     
                    </div>
                    <div className="col ">
                    
                           
                        <img  src = {p8}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>Kite Runner</span>
                        <div className="col">
                        &ensp;&ensp;
                        <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
                     
                    </div>
                    <div className="col ">
                    
                           
                        <img  src = {p3}  className="img-fluid" alt="Responsive " style={{width:'50%'}}/>
                        <br/>
                        <span>{title}</span>
                        <div className="col">
                        &ensp;&ensp;
                        <a href="/edit" id="link">
                         <img id="img141" src={p10} style={{width:'10%'}}/>
                         </a>
                         &ensp;&ensp;
                         <img id="img141" src={p11} style={{width:'10%'}}/>
                        </div>
                      
                    </div>
                    <div className="col ">
                   
                    </div>
                </div>
                <br/><br/> */}


                </div>

            </div>


            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                   
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    
                    </div>
                </div>
                </div>

    </div>

  );
}
