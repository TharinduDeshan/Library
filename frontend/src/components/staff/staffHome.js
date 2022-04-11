import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function StaffHome(props) {


  return (
  <div className=" text-center">
      <br/>
      <img src={'../images/home.jpg'} className="img-fluid" alt="Responsive "/>
     <br/><br/><br/>

    <div className="row" style={{color:'#3F3232', fontWeight:'bold', fontSize:'18px'}}>
        
        <div className="col-sm">
            <a style={{color:'#3F3232'}} class="navbar-brand" href="/category">Categories</a>
        </div>
        <div className="col-sm">
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="/add">Add Items</a>
        </div>
        <div className="col-sm">
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="#">Issued Items</a>
        </div>
        <div className="col-sm">
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="#">Add Customers</a>
        </div>
        <div className="col-sm">
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="#">New Membership</a>
        </div>
    </div>
    <br/><br/><br/><br/>

     <div className="row">
         
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {'../images/book2.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Books</span>
            </a>
         </div>

         
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
             <img src={'../images/book2.jpg'} className="img-fluid" alt="Responsive "/>
             <br/>
             <span>Children Books</span>
             </a>
         </div>
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
             <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
             <br/>
            <span>Articles</span>
            </a>
         </div>
        
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {'../images/book1.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Movies and comics</span>  </a>
         </div>
    </div>
    <br/><br/>

    <div className="row">
         
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {'../images/book1.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Musics</span>  </a>
         </div>
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
             <img  src = {'../images/book2.jpg'}  class="img-fluid" alt="Responsive "/>
             <br/>
            <span>Educationl</span>  </a>
         </div>
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {'../images/book3.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>News Papers</span>  </a>
         </div>
         <div className="col"><a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {'../images/book5.jpg'}  class="img-fluid" alt="Responsive "/>
            <br/>
            <span>Magazines</span>  </a>
         </div>
    </div>
     
    

  </div>
  );
}
