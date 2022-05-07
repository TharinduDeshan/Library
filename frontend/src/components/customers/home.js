import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import p2 from "../../images/home5.jpg";

import p3 from "../../images/book1.jpg"
import p4 from "../../images/book2.jpg";
import p5 from "../../images/book3.jpg";
import p6 from "../../images/book4.jpg";
import p7 from "../../images/book5.jpg";
import p8 from "../../images/book6.jpg";

export default function Home(props) {

    const history = useNavigate();

   let [item, setitem] = useState([]);
   let [Category, setCategory] = useState([]);

   function filterItems(type){
       
       history(`/customer/category/${type}`)
     }

  return (
  <div className="text-center">
      <br/>
      <img src={p2} className="img-fluid" alt="Re " style={{height:'50%'}}/>
     <br/><br/><br/>

<h1>The Wonderful World Of Reading</h1>
     <p>Read whatever you like whenever you like</p><br/><br/><br/>

     <div className="row" style={{fontWeight:'bold', fontSize:'18px', marginLeft:'30px', marginRight:'30px'}}>
         
         <div className="col" onClick={()=>filterItems("Books")}>
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span >Books</span>
         </div>

         
         <div className="col" onClick={()=>filterItems("Children Books")}>
             <img src = {p4}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
             <span>Children Books</span>
         </div>
         <div className="col" onClick={()=>filterItems("Articles")}> 
             <img  src = {p5}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
            <span>Articles</span>
         </div>
        
         <div className="col" onClick={()=>filterItems("Movies and comics")}>
             
            <img  src = {p6}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Movies and comics</span> 
         </div>
    </div>
    <br/><br/>

    <div className="row" style={{fontWeight:'bold', fontSize:'18px', marginLeft:'30px', marginRight:'30px'}}>
         
         <div className="col" onClick={()=>filterItems("Musics")}>
             
            <img  src = {p7}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Musics</span>  
         </div>
         <div className="col" onClick={()=>filterItems("Educationl")}>
             
             <img  src = {p8}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
            <span>Educationl</span>  
         </div>
         <div className="col" onClick={()=>filterItems("News Papers")}>
             
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>News Papers</span>  
         </div>
         <div className="col" onClick={()=>filterItems("Magazines")}>
             
            <img  src = {p4}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Magazines</span>  
         </div>
    </div>
    <br/>
    <br/><br/>


  </div>
  );
}
