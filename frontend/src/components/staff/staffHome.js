import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import p2 from "../../images/home5.jpg";

import p3 from "../../images/book1.jpg"
import p4 from "../../images/book2.jpg";
import p5 from "../../images/book3.jpg";
import p6 from "../../images/book4.jpg";
import p7 from "../../images/book5.jpg";
import p8 from "../../images/book6.jpg";
import Footer from "../navigations/footer";


export default function StaffHome(props) {

    const history = useNavigate();

    let [item, setitem] = useState([]);
    let [Category, setCategory] = useState([]);

    function filterItems(type){

        history(`/staff/scategory/${type}`)
      }

  return (
  <div className=" text-center">
      <img src={p2} className="img-fluid" alt="Re " style={{height:'40%'}}/>
     <br/><br/>

    <div className="row" style={{color:'#3F3232', fontWeight:'bold', fontSize:'18px'}}>
        
        <div className="col-sm list-group-item list-group-item-action" style={{border:'0px'}}>
            <a style={{color:'#3F3232', textDecoration:'underline',border:'0px'}} class="navbar-brand " href="/scategory">Categories</a>
        </div>
        <div className="col-sm list-group-item list-group-item-action" style={{border:'0px'}}>
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="/staff/addItem">Add Items</a>
        </div>
        <div className="col-sm list-group-item list-group-item-action" style={{border:'0px'}}>
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="#">Issued Items</a>
        </div>
        <div className="col-sm list-group-item list-group-item-action" style={{border:'0px'}}>
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="/staff/addCustomer">Add Customers</a>
        </div>
        <div className="col-sm list-group-item list-group-item-action" style={{border:'0px'}}>
            <a style={{color:'#3F3232'}}  class="navbar-brand" href="#">New Membership</a>
        </div>
    </div>
    <br/><br/><br/><br/>

     <div className="row" style={{fontWeight:'bold', fontSize:'18px', marginLeft:'30px', marginRight:'30px'}}>
         
         <div className="col" onClick={()=>filterItems("Books")}>
             
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span >Books</span>
            
         </div>

         
         <div className="col" onClick={()=>filterItems("Books")}>
             
             <img src = {p4}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
             <span>Children Books</span>
             
         </div>
         <div className="col" onClick={()=>filterItems("Books")}> 
         
             <img  src = {p5}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
            <span>Articles</span>
            
         </div>
        
         <div className="col" onClick={()=>filterItems("Books")}>
             
            <img  src = {p6}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Movies and comics</span>  
         </div>
    </div>
    <br/><br/>

    <div className="row" style={{fontWeight:'bold', fontSize:'18px', marginLeft:'30px', marginRight:'30px'}}>
         
         <div className="col" onClick={()=>filterItems("Books")}>
             
            <img  src = {p7}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Musics</span>  
         </div>
         <div className="col" onClick={()=>filterItems("Books")}>
             
             <img  src = {p8}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
            <span>Educationl</span>  
         </div>
         <div className="col" onClick={()=>filterItems("Books")}>
             
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>News Papers</span>  
         </div>
         <div className="col" onClick={()=>filterItems("Books")}>
             
            <img  src = {p4}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Magazines</span>  
         </div>
    </div>
    <br/>

    <br/><br/><br/><br/>
     
  </div>
  );
}
