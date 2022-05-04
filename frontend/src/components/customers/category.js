import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
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

export default function Category(props) {

    // const[item,setItem] = useState("");

    // const p3 = "../../images/book1.jpg"
    const[title,setTitle] = useState("");
    // let item = [];
    let [item, setitem] = useState([]);
    let [Category, setCategory] = useState([]);

    let topic = "";

   let [errorText, seterrorText] = useState("")
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
                    </div>
        {item.map((i)=>{
            return(
                
                <div className="col-3 text-center">
                
                   
                    <img  src={p3}  className="img-fluid" alt="Responsive " style={{width:'45%', marginBottom:'5px'}}
                    // src = {"./images/book1.jpg" || p3}
                    //  onError={(e) => {
                    //     e.target.onerror = null;
                    //     e.target.src = {p3};
                    //   }}
                      />
                    <br/>
                    <span style={{fontWeight:'bold', float:'center'}}>{i.Title}</span>
                   
                    <br/> <br/> <br/> 
                </div>
               
              
            )
        })}
          
            </div>
            <br/>
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
