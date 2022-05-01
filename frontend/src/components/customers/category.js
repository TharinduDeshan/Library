import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/search.css"

// import p5 from "./images/book1.jpg"
import p5 from "../../images/book1.jpg"

export default function Category(props) {


  return (

    <div className="container" style={{color:'#3F3232'}}>
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
                <div className="col-3">

                    <h4>Other Categories</h4>
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Books</li>
                        <li class="list-group-item">Magazines</li>
                        <li class="list-group-item">Articles</li>
                        <li class="list-group-item">News Papers</li>
                        <li class="list-group-item">Movies and comics</li>
                        <li class="list-group-item">Articles</li>
                        <li class="list-group-item">News Papers</li>
                        <li class="list-group-item">Movies and comics</li>
                        </ul>

                </div>
                <div className="col-1"></div>
            <div className="col-8 overflow-auto">
                <h3>Books</h3>
                <br/><br/>

                <div className="row">
         
                    <div className="col " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img  src = {p5}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Story Books</span>
                    </div>

                    
                    <div className="col">
                        <img src={'./images/book2.jpg'} className="img-fluid" alt="Responsive "/>
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


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
            
                    <div class="modal-body">
                        <div className="row">
                            
                            <div className="col-5">
                                <img src={p5} style={{width:'80%', marginLeft:'30px', marginTop:'15px'}} />
                            </div>

                            <div className="col-7">
                            
                                <label style={{fontSize:'22px',paddingBottom:'2px',fontWeight:'bold', paddingTop:'15px'}}>Book Name</label><br/>
                                <label style={{paddingBottom:'1px'}}>Author name</label><br/>
                                <label style={{paddingBottom:'1px'}}>Category</label><br/>
                                <label style={{paddingBottom:'10px'}}>12/12/2020</label><br/>
                                <label style={{fontSize:'18px',paddingBottom:'30px',fontWeight:'bold'}}>Rs. 200/=</label><br/>

                                <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'200px', boxShadow:'5px 5px #dcdcdc'}}>Add to Cart</button>

                            </div>
                        </div>

                        <div className="row" style={{margin:'10px', marginTop:'20px', lineHeight:'1.2'}}>
                            <p>The definition of a description is a statement that gives details about someone or something. An example of description is a story about the places visited on a family trip. noun</p>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}
