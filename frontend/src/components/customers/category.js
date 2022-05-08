import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
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
    // const[title,setTitle] = useState("");

    // const[customerID,setcustomerID] = useState("");
    const[itemIDs,setitemIDs] = useState("");
    const[orderDate,setorderDate] = useState("");
    // let item = [];
    let [item, setitem] = useState([]);
    let [Category, setCategory] = useState([]);
    let [ItemIds, setItemIds] = useState([]);

    let topic = "";
    // let [name, setName] = useState("")
    let [none, setNone] = useState("")
   let [errorText, seterrorText] = useState("")

   const [title,setTitle]=useState();
   const [author,setAuthor]=useState();
   const [description,setDescription]=useState();
   const [date,setDate]=useState();
   const [price,setPrice]=useState();
   const [cat,setCat]=useState();
   const [catID,setCatID]=useState();

   const [modalOpenForItem, setModalOpenForItem] = useState(false);

   const {type} = useParams();
   console.log(type)

   const pageTitle="Books"
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

                 console.log(filter)
                 if(filter.length != 0){
                    setNone("")
               }
               else if(filter.length == 0){
                   setNone("No Items Found")
               }
                 setitem(filter)

                 setCategory(type)

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

          axios
          .get("http://localhost:8070/items/get")
          .then((res) => {
              console.log(res.data)

              const filter = res.data.filter(
                  (items)=>
                  items.Category === type
              );

              setCategory(type)

               console.log(filter.length)
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

      function Cart(id){
        //   alert(id)
        //const id="625bf949653c75bea85783f0" //temporary id
        const customerID ="625c12c9f36bd7f6a5c6748d"  //temporary id

        axios
        .get("http://localhost:8070/cart/getAllCarts")
        .then((res) => {
            console.log(res.data)

            const filter = res.data.filter(
                (cusID)=>
                cusID.customerID ===customerID 
            );

            if(filter.length==0){

                const newCart ={
                    customerID : customerID,
                    itemIDs: id
                }
                    axios
                    .post("http://localhost:8070/cart/add" , newCart)  
                    .then((res)=>{                
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Item added to cart Successfully!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    })
                    .catch((err) => {
                    alert(err);
                    });
            }
            else if(filter.length==1){
            
                axios
                .get("http://localhost:8070/cart/getOneCart/" + customerID) 
                .then((res) => {
                    console.log(res.data)
                
                    let cartID = res.data._id;
                    let newItems = res.data.itemIDs;

                        let flags = 0;
                        for(let i = 0; i < newItems.length; i++){
                            if(id === newItems[i]){
                                flags = 1;
                            }
                        }
                        newItems.push(id)

                            const updatedCart={
                                itemIDs :newItems
                            }

                            if(flags === 0){
                                axios
                                .put("http://localhost:8070/cart/updateCartItems/" + customerID, updatedCart)
                                .then((res)=>{
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Item added to cart Successfully!",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                })
                                .catch((err) => {
                                alert(err);
                                });
                            }
                            else if(flags === 1){
                                Swal.fire("Item Already in Your Shopping Cart.");
                            }
                    })
                    .catch((err) => {
                    alert(err);
                    });
                }
        })
        .catch((err) => {
            alert(err);
        });

      }

      function modalOpen(data){

        setTitle(data.Title)
        setAuthor(data.Author)
        setPrice(data.Price)
        setDescription(data.Description)
        setDate(data.Date)
        setCat(data.Category)
        setCatID(data._id)
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
                        <h4 className = "text-danger">{errorText}</h4>
                        <h4 className = "text-danger">{none}</h4>
                   

        {item.map((i)=>{
            console.log(i.Images)
            return(
                
                <div className="col-3 text-center" >
                
                   <div data-bs-toggle="modal" data-bs-target="#exampleModal" 
                   onClick={()=>modalOpen(i)}
                   >

                    <img className="img-fluid" alt="Responsive " style={{width:'45%', marginBottom:'5px'}}
                    src={"/Images/" + i.Images}
                    //  onError={(e) => {
                    //     e.target.onerror = null;
                    //     e.target.src = {p3};
                    //   }}
                      />
                    <br/>
                    <span style={{fontWeight:'bold', float:'center'}}>{i.Title}</span>
                    </div>
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
                                <img src={p5} style={{width:'80%', marginLeft:'20px', marginTop:'15px'}} />
                            </div>

                            <div className="col-7">
                            
                                <label style={{fontSize:'22px',paddingBottom:'2px',fontWeight:'bold', paddingTop:'15px'}}>{title}</label><br/>
                                <label style={{paddingBottom:'1px'}}>{author}</label><br/>
                                <label style={{paddingBottom:'1px'}}>{cat}</label><br/>
                                <label style={{paddingBottom:'10px'}}>{date}</label><br/>
                                <label style={{fontSize:'18px',paddingBottom:'30px',fontWeight:'bold'}}>Rs. {price}/=</label><br/>

                                <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'200px', boxShadow:'5px 5px #dcdcdc'}}
                                onClick={()=>Cart(catID)}
                                >Add to Cart</button>

                            </div>
                        </div>

                        <div className="row" style={{margin:'10px', marginTop:'20px', lineHeight:'1.2'}}>
                            <p>{description}</p>
                        </div>   
                    </div>
                </div>
            </div>
        </div>

<br/><br/><br/><br/><br/><br/><br/>
      
    </div>

  );
}
