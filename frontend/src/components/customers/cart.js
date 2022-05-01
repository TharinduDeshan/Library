import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import T from "./images/trash.png"

export default function Cart(props) {

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

    useEffect(() => {
        function getCart() {
            
          axios
            .get("http://localhost:8070/cart/getOneCart/625c12c9f36bd7f6a5c6748d")
            .then((res) => {
                // console.log(res.data)
               
                ItemIds = res.data.itemIDs
                // console.log(ItemIds)

                axios
                .get("http://localhost:8070/items/get")
                .then((res) => { 
                 
                    AllItems = res.data
                    console.log(AllItems)
                    console.log(ItemIds)

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

        console.log(AllItems)
        console.log(ItemIds)
    
        for (let i = 0; i < ItemIds.length; i++) {
          j = 0;
          
          for (j = 0; j < AllItems.length; j++) {
            
            if (ItemIds[i] === AllItems[j]._id) {
                console.log(ItemIds)
              ItemDetails = {
                ItemID: ItemIds[i]._id,
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
             console.log(AllItemsArr)
            }
          }
        }
        setabc(AllItemsArr);
        console.log(AllItemsArr)
      }
        

  return (

    <div style={{color:'#3F3232', marginLeft:'60px'}}>
        <br/>
        <h3>My Cart</h3>

        <br/>

    <div className="row">
        <div className="col-7 overflow-auto">
        {/* <hr/> */}
        {abc.map((item) => {
            
                  return (
                      <div>
                           <hr/>
                    <div className="row">
                        <div className="col-3">
                            <img style={{width:'200px'}}  src="../images/book1.jpg" />
                        </div>
                        <div className="col-6" style={{color:'#3F3232'}}>
                            <span style={{fontSize:'18px', fontWeight:'bold'}}>{item.Title}</span>
                            <br/>
                            <span>&nbsp;{item.Author}</span>
                            <br/>
                            <span>&nbsp;{item.Category}</span>
                            <br/>  <br/>
                            <span>&nbsp;Rs.{item.Price}/=</span>
                          
                        </div>
                        <div className="col-3">
                            
                            <img style={{width:'20px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}  src={T} />
                            <br/><br/><br/>
                            {/* <label>QTY</label>
                            <input type="number" pattern="[1-9]" Min="1" class="form-control" defaultValue='1' id="quantity" aria-describedby="textHelp" style={{border:'0px solid #3F3232', width:'70px'}}/>
                         */}
                        </div>
                        <br/>
                       
                    </div>
                  </div>
                  )})}

        {/* <div className="row">
                <div className="col-3">
                    <img style={{width:'200px'}}  src="../images/book1.jpg" />
                </div>
                <div className="col-6" style={{color:'#3F3232', fontWeight:'bold'}}>
                    <span style={{fontSize:'18px'}}>{items.Title}</span>
                    <br/>
                    <span>&nbsp;&nbsp;{items.Author}</span>
                    <br/>  <br/>
                    <span>&nbsp;&nbsp;Rs.300/=</span>
                </div>
                <div className="col-3">
                    
                    <img style={{width:'200px'}}  src="../images/trash.png" />
                    <br/><br/><br/>
                    <label>QTY</label>
                    <input type="number" pattern="[1-9]" Min="1" class="form-control" defaultValue='1' id="quantity" aria-describedby="textHelp" style={{border:'0px solid #3F3232', width:'70px'}}/>
                   
                </div>
            </div> */}

        </div>

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
