import React, { useState , useEffect, Component} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";


import T from "../../images/trash.png"
import P1 from "../../images/book1.jpg"

export default function Cart(props) {

    let items = [];

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

  //   constructor(props){
  //     super(props)

  //     this.state={ }
  // }

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
            }
          }
        }
        setabc(AllItemsArr);
        console.log(AllItemsArr)
      }
        

        //Remove Items From the Cart

        function removeItems(id){
          console.log(id)
          
          axios
          .get("http://localhost:8070/cart/getOneCart/" + customerID)
          .then((res) => {

              let cartID = res.data._id;
              let itemssIds = res.data.itemIDs;
              console.log(itemssIds)

              const filter = itemssIds.filter(
                (itemss)=>
                itemss != id 
               );
            const updatedCart={
              itemIDs : filter
          }
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


        function jsPdfGenerator(){
          // window.location.reload(false);

        // jsPdfGenerator = () => {

          // alert('aaa')
  
          var doc = new jsPDF('p', 'pt');
  
          doc.text(260,40, 'Library')
          doc.text(170,80, 'The Wonderful World Of Reading')
          doc.text(30,120, '*************************************************************************************')
          doc.text(260,140, 'Receipt')
          doc.text(30,170, '*************************************************************************************')
          doc.text(100,200, 'Description')
          doc.text(450,200, 'Price (Rs.)')
          doc.text(30,670, '*************************************************************************************')
          doc.text(100,690, 'No of Items')
          // doc.text(450,690, {CartItems})
          doc.text(100,720, 'Total Price')
          // doc.text(450,720, 'Rs.',{allItemsTotal},'/=')
          doc.text(30,750, '*************************************************************************************')
          doc.text(250,800, 'Thank You !')


          // doc.setFont('courier');
          // doc.setFontType('normal')
  
          doc.save("Item_Report.pdf")
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
                        >
                            <img style={{width:'120px', height:'150px'}}  
                           src={"/Images/" + item.Image}
                            
                            />
                        </div>
                        <div className="col-6" style={{color:'#3F3232', fontWeight:'bold'}}>
                            <span style={{fontSize:'20px', fontWeight:'bold'}}>{item.Title}</span>
                            <br/>
                            <span>&nbsp;{item.Author}</span>
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
                  </div>
                  )})}


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
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="submit" class="btn" 
                  style={{backgroundColor:'#F2AB39',color:'#fff', fontWeight:'bold', width:'200px', float:'center'}}>
                    Place the Order
                  </button>
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
                             onClick={()=>jsPdfGenerator()} >Ok</button>

                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>

    </div>

  );
}
