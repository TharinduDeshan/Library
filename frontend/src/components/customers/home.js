import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import p2 from "../../images/home5.jpg";

import p3 from "../../images/book1.jpg"
import p4 from "../../images/book2.jpg";
import p5 from "../../images/book3.jpg";
import p6 from "../../images/book4.jpg";
import p7 from "../../images/book5.jpg";
import p8 from "../../images/book6.jpg";

export default function Home(props) {


   let [item, setitem] = useState([]);
   let [Category, setCategory] = useState([]);

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

         })
         .catch((err) => {
           alert(err);
         });
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
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span >Books</span>
            </a>
         </div>

         
         <div className="col" onClick={()=>filterItems("Books")}>
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
             <img src = {p4}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
             <span>Children Books</span>
             </a>
         </div>
         <div className="col" onClick={()=>filterItems("Books")}> 
         <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
             <img  src = {p5}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
            <span>Articles</span>
            </a>
         </div>
        
         <div className="col" onClick={()=>filterItems("Books")}>
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {p6}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Movies and comics</span>  </a>
         </div>
    </div>
    <br/><br/>

    <div className="row" style={{fontWeight:'bold', fontSize:'18px', marginLeft:'30px', marginRight:'30px'}}>
         
         <div className="col" onClick={()=>filterItems("Books")}>
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {p7}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Musics</span>  </a>
         </div>
         <div className="col" onClick={()=>filterItems("Books")}>
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
             <img  src = {p8}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
             <br/>
            <span>Educationl</span>  </a>
         </div>
         <div className="col" onClick={()=>filterItems("Books")}>
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {p3}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>News Papers</span>  </a>
         </div>
         <div className="col" onClick={()=>filterItems("Books")}>
             <a href="/category" style={{color:'#3F3232', textDecoration:'none'}}>
            <img  src = {p4}  class="img-fluid" alt="Responsive " style={{width:'40%'}}/>
            <br/>
            <span>Magazines</span>  </a>
         </div>
    </div>
    <br/>
    <br/><br/>

 

  </div>
  );
}
