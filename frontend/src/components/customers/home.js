import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import p2 from "../../images/home5.jpg";

import p3 from "../../images/book1.jpg"
import p4 from "../../images/book2.jpg";
import p5 from "../../images/book3.jpg";
import p6 from "../../images/book4.jpg";
import p7 from "../../images/book5.jpg";
import p8 from "../../images/book6.jpg";

export default function Home(props) {


  return (
  <div className="text-center">
      <br/>
      <img src={p2} className="img-fluid" alt="Re " style={{height:'50%'}}/>
     <br/><br/><br/>

<h1>The Wonderful World Of Reading</h1>
     <p>Read whatever you like whenever you like</p><br/><br/><br/>

     <div className="row" style={{fontWeight:'bold',fontSize:'17px', marginRight:'100px', marginLeft:'100px'}}>
         
         <div className="col">
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
            <br/>
            <span>Story Books</span>
         </div>
        
         <div className="col">
             <img src={p4} className="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
             <br/>
             <span>Story Books</span>
         </div>
         <div className="col">
             <img  src = {p5}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
             <br/>
            <span>Articles</span>
         </div>
        
         <div className="col">
            <img  src = {p6}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
            <br/>
            <span>Movies and comics</span>
         </div>
    </div>
    <br/><br/>
     <div className="row" style={{fontWeight:'bold',fontSize:'17px', marginRight:'100px', marginLeft:'100px'}}>
         
         <div className="col">
            <img  src = {p7}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
            <br/>
            <span>Musics</span>
         </div>
         <div className="col">
             <img  src = {p8}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
             <br/>
            <span>Educationl</span>
         </div>
         <div className="col">
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
            <br/>
            <span>News Papers</span>
         </div>
         <div className="col">
            <img  src = {p4}  class="img-fluid" alt="Responsive " style={{width:'50%', marginBottom:'10px'}}/>
            <br/>
            <span>Childrens Books</span>
         </div>
         
    </div>
    <br/><br/>


  </div>
  );
}
