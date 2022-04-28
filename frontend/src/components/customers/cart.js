import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart(props) {

    let cart = [];
    let items = [];
    // let[items,setItems] = useState("");
    let ItemIds = [];

    useEffect(() => {
        function getCart() {
          axios
            .get("http://localhost:8070/cart/getOneCart/625c12c9f36bd7f6a5c6748d")
            .then((res) => {
                console.log(res.data)
                cart = (res.data)
                console.log(cart.itemIDs)
               
                ItemIds = cart.itemIds

                for (let i = 0; i < cart.itemIDs.length; i++) {
                    ItemIds = cart.itemIDs[i]
                    // console.log(ItemIds)
                  }
                  console.log(ItemIds)
            })
            .catch((err) => {
              alert(err);
            });
        }
        axios
        .get("http://localhost:8070/items/get")
        .then((res) => {
            console.log(res.data)
            const filter = res.data.filter(
                (item) =>
                  item._id === ItemIds

              );
              console.log(filter)
              items=filter[0]
              console.log(items)
              console.log(items.Title)
         
        })
        .catch((err) => {
          alert(err.message);
        });
    
        getCart();
      }, []);




  return (

    <div style={{color:'#3F3232', marginLeft:'60px'}}>
        <br/>
        <h3>My Cart</h3>

        <br/>

    <div className="row">
        <div className="col-7 ">
        <hr/>

            <div className="row">
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
            </div>

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
                    <span>   5</span>
                    <br/><br/>
                    <span>  Rs. 500/=</span>
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
