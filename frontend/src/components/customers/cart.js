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
            // console.log(res.data)

              let cartID = res.data._id;
              let itemssIds = res.data.itemIDs;
              console.log(itemssIds)

              const filter = itemssIds.filter(
                (itemss)=>
                itemss != id 
                // {console.log(items)}
               );
               
            console.log(filter)

            const updatedCart={
              itemIDs : filter
          }
          console.log(updatedCart)
            axios
            .put("http://localhost:8070/cart/updateCartItems/" + customerID, updatedCart)
            .then((res)=>{
              Swal.fire("Success", "Item Removed From The Cart", "success",{timer:1500});
          
              window.location.reload(false);
            })
            .catch((err) => {
            alert(err);
            });

          })
          .catch((err) => {
            alert(err);
            });
        }

        // function order(){

        // }

        function modalOpen(){

          // setTitle(data.Title)
          // setAuthor(data.Author)
          // setPrice(data.Price)
          // setDescription(data.Description)
          // setDate(data.Date)
          // setCat(data.Category)
          // setCatID(data._id)
          // setImage(data.Images)
        }

        function okBtn(){
          window.location.reload(false);
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
                           src={"/Images/" + item.Image}
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
                <button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#fff', fontWeight:'bold', width:'200px', float:'center'}}
                onClick={()=>modalOpen()}
              >Place the Order</button>
                </center>
            <br/><br/><br/>
                <div style={{border:'1px solid #3F3232', padding:'15px'}}>
                    <span style={{fontWeight:'bold', paddingBottom:'50px'}}>Note</span>
                    <br/>
                    <p>When returning an item if the due date is expired or item is damaged responsible person may have pay an additional amount</p>
                </div>
        </div>
    </div>
    <br/><br/><br/><br/><br/>

     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <br/>
                    <div class="modal-body text-center">
                        <div className="row text-center">
                           
                            <h3>Library</h3>
                            <h6>The Wonderful World Of Reading</h6>
                            <label>**************************************************************</label>
                            <h5>Receipt</h5>
                            <label>**************************************************************</label>
                        </div>

                        <div className="row text-center">
                          <div className="col-sm">  
                            <label style={{fontSize:'18px',paddingBottom:'10px',fontWeight:'bold', paddingTop:'10px'}}>Description</label><br/>
                          </div>
                          <div className="col-sm">  
                            <label style={{fontSize:'18px',paddingBottom:'10px',fontWeight:'bold', paddingTop:'10px'}}>Price (Rs)</label><br/>
                          </div>
                        </div>

                   {abc.map((item) => {
      
                      return (
                        <div className="row">
                            <div className="col-sm">
                                <ul style={{listStyle:'none'}}>
                                  <li>{item.Title}</li>
                                </ul>
                                
                            </div>
                            <div className="col-sm">
                               <ul style={{listStyle:'none'}}>
                                  <li>{item.Price}</li>
                                </ul>
                            </div>
                        </div>
                           )})}

                 
                        <div className="row">
                           <label>**************************************************************</label>
                            <div className="col-sm">
                            <label style={{fontSize:'17px',fontWeight:'bold'}}>No of Items</label><br/>
                                <label style={{fontSize:'17px',fontWeight:'bold'}}>Total</label><br/>
                            </div>
                            <div className="col-sm">   
                                <label style={{fontSize:'17px',fontWeight:'bold'}}>{CartItems}</label><br/>
                                <label style={{fontSize:'17px',fontWeight:'bold'}}>Rs. {allItemsTotal} /=</label><br/>
                            </div>
                          </div>
                          
                          <label>**************************************************************</label>

                          <br/><br/>
                          <h5>Thank You !</h5>
                          <br/>
                        <button aria-label="Close" type="submit" class="btn text-center" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'200px', boxShadow:'5px 5px #dcdcdc'}}
                             onClick={()=>okBtn()} >Ok</button>

                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>

    </div>

  );
}
{/* <label style={{paddingBottom:'1px'}}>sdf</label><br/>
                                <label style={{paddingBottom:'1px'}}>sdf</label><br/>
                                <label style={{paddingBottom:'10px'}}>sdfv</label><br/> */}