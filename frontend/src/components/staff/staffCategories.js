import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/search.css"

export default function StaffCategory(props) {

    // useEffect(() => {
    //     function getItems() {
    //       axios
    //         .get("http://localhost:8070/items/get")
    //         .then((res) => {
    //             console.log(res.data)
    //             // for(let j=0;j<9;j++){
    //             for(let i=0;i<9;i++){
    //                 const filter = res.data.filter(
    //                     (items) =>
    //                       items.Category === "Books"
    //                   );
    //                   console.log(filter)
    //                   console.log(filter[i].Category)
    //             }
    //         // }
             
    //         })
    //         .catch((err) => {
    //           alert(err);
    //         });
    //     }
    
    
    
    //     getItems();
    //   }, []);


  return (

    <div  style={{color:'#3F3232'}}>
            <div className="searchbaar">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar" >
                            <input className="search_input" type="text" name=""/>
                            <a type="button" className="search_icon"  >
                            <img id="img141" src="../images/loupe.png" />
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
                <h3>Books</h3>
                <br/><br/>

                <div className="row">
         
                    <div className="col ">
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Story Books</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                    </div>

                    
                    <div className="col">
                        <img src={'../images/book2.jpg'} className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Story Books</span>
                    </div>
                    <div className="col">
                        <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Articles</span>
                    </div>
                    
                    <div className="col">
                        <img  src = {'../images/book1.jpg'}  class="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Movies and comics</span>
                    </div>
                </div>

                <br/><br/>

                <div className="row">
                    
                    <div className="col">
                        <img  src = {'../images/book1.jpg'}  class="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Musics</span>
                    </div>
                    <div className="col">
                        <img  src = {'../images/book2.jpg'}  class="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Educationl</span>
                    </div>
                    <div className="col">
                        <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>News Papers</span>
                    </div>
                    <div className="col">
                        <img  src = {'../images/book5.jpg'}  class="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Childrens Books</span>
                    </div>
                </div>

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
