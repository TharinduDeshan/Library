import React, { useState , useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

// import Images from "../../images"

import T from "../../images/trash.png"
import P1 from "../../images/book1.jpg"

export default function Cart(props) {


    // let imgPath = P1.split("/");
    // console.log(imgPath)
    // console.log(imgPath[0]+imgPath[1]+imgPath[2]+imgPath[3])
    // let img = imgPath[0]+imgPath[1]+imgPath[2]+imgPath[3]

    // let cart = [];
    let items = [];
    // let[items,setItems] = useState("");

    let [ItemIds, setItemIds] = useState([]);
    let [AllItems, setAllItems] = useState([]);
    let [abc, setabc] = useState([]);
    let AllItemsArr = [];

    let [allItemsTotal, setAllItemsTotal] = useState(0);
    let [CartItems, setCartItems] = useState(0);

    let ItemID = "";
    let Title = "";
    let Author = "";
    let Category = "";
    let Price = "";
    let Quantity = "";
    let SubTitle = "";
    let Date = "";
    let Image = "";
  
    let ItemDetails = {
      ItemID,
      Title,
      Author,
      Category,
      Price,
      Quantity,
      SubTitle,
      Date,
      Image
    };

    const customerID = "625c12c9f36bd7f6a5c6748d"

    useEffect(() => {
        function getCart() {       
          axios
            .get("http://localhost:8070/cart/getOneCart/" + customerID)
            .then((res) => {
                ItemIds = res.data.itemIDs

                axios
                .get("http://localhost:8070/items/get")
                .then((res) => { 
                    AllItems = res.data
                    setCartItems(ItemIds.length)
                    getItemss(ItemIds,AllItems);
                })
                .catch((err) => {
                  alert(err.message);
                });
            })
            .catch((err) => {
              alert(err);
            });
        }
        getCart();
      }, []);


      function getItemss( ItemIds, AllItems) {
        let j = 0;
        
        setAllItemsTotal(0)

        // console.log(AllItems)
        // console.log(ItemIds)
    
        for (let i = 0; i < ItemIds.length; i++) {
          j = 0;
          
          for (j = 0; j < AllItems.length; j++) {
            
            if (ItemIds[i] === AllItems[j]._id) {
              ItemDetails = {
                ItemID: AllItems[j]._id,
                Title: AllItems[j].Title,
                Author: AllItems[j].Author,
                Category: AllItems[j].Category,
                Price: AllItems[j].Price,
                Quantity: AllItems[j].Quantity,
                SubTitle: AllItems[j].SubTitle,
                Image: AllItems[j].Images[0],
                Date: ItemIds[i].orderDate,   
              };
              
              setAllItemsTotal(
                Number(allItemsTotal) + Number(AllItems[j].Price)
              );
              allItemsTotal =
                Number(allItemsTotal) + Number(AllItems[j].Price);
              AllItemsArr.push(ItemDetails);
            //  console.log(AllItemsArr)
            }
          }
        }
        setabc(AllItemsArr);
        console.log(AllItemsArr)
      }
      // console.log(ItemDetails)
        

        //Remove Items From the Cart

        function removeItems(id){
          console.log(id)
          
          axios
          .get("http://localhost:8070/cart/getOneCart/" + customerID)
          .then((res) => {
            console.log(res.data)

              let cartID = res.data._id;
              let itemssIds = res.data.itemIDs;

              const filter = itemssIds.filter(
                (itemss)=>
                itemss.itemIDs !== id 
               );

            console.log(filter)

            const updatedCart={
              itemIDs : filter
          }

            axios
            .put("http://localhost:8070/cart/updateCartItems/" + customerID, updatedCart)
            .then((res)=>{
              Swal.fire("Success", "Item Removed From The Cart", "success");
            })
            .catch((err) => {
            alert(err);
            });

          })
          .catch((err) => {
            alert(err);
            });
        }


  return (

    <div style={{color:'#3F3232', marginLeft:'60px'}}>
        <br/>
        <h2><label style={{fontSize:'130%'}}>M</label>y Cart</h2>

        <br/>

    <div className="row">
        <div className="col-7" style={{marginLeft:'15px', marginTop:'-30px',height:'550px', overflowY: "scroll"}}>
          
        {abc.map((item) => {

          console.log(item.Image)
            
                  return (
                      <div>
                        <br/>
                         <hr style={{width:'90%', height:'3px', marginLeft:'30px'}}/>
                       
                    <div className="row">
                        <div className="col-3 text-center" 
                        // style={{backgroundColor:'red'}}
                        >
                            <img style={{width:'120px', height:'150px'}}  
                            src="frontend/src/images/book1.jpg"
                            // src={`../../images/${item.Image}`}
                            
                            />
                        </div>
                        <div className="col-6" style={{color:'#3F3232', fontWeight:'bold'}}>
                            <span style={{fontSize:'20px', fontWeight:'bold'}}>{item.Title}</span>
                            <br/>
                            <span>&nbsp;{item.Author}</span>
                            {/* <br/>
                            <span>&nbsp;{item.Category}</span> */}
                            <br/>  <br/>
                            <span>&nbsp;Rs.{item.Price}/=</span>
                          
                        </div>
                        <div className="col-3">
                            <button className="btn"
                            onClick={()=>removeItems(item.ItemID)}>
                              <img style={{width:'23px'}}  src={T} />
                            </button>
                            <br/><br/><br/>
                            
                        </div>
                        <br/>
                        
                    </div>
                    {/* <br/>
                           <hr style={{width:'90%', height:'2px', marginLeft:'30px'}}/> */}
                  </div>
                  )})}


        </div>
        {/* <div className="col-1" style={{marginLeft:'80px'}}>

        </div> */}

        <div className="col-3" style={{marginLeft:'80px'}}>
            <h4>Total</h4>
            <hr/>
            <div className="row">
                <div className="col">
                    <span>No of Items  : </span>
                    <br/><br/>
                    <span>Sub Total  : </span>
                </div>
                <div className="col text-end">
                    <span>   {CartItems}</span>
                    <br/><br/>
                    <span>  Rs. {allItemsTotal}/=</span>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <center>
                <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#fff', fontWeight:'bold', width:'200px', float:'center'}}>Place the Order</button>
                </center>
            <br/><br/><br/>
                <div style={{border:'1px solid #3F3232', padding:'15px'}}>
                    <span style={{fontWeight:'bold', paddingBottom:'50px'}}>Note</span>
                    <br/>
                    <p>When returning an item if the due date is expired or item is damaged responsible person may have pay an additional amount</p>
                </div>
        </div>
    </div>
    </div>

  );
}
