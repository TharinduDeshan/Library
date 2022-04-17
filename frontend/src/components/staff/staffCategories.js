import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/search.css"

export default function StaffCategory(props) {

    // const[item,setItem] = useState("");

    const[title,setTitle] = useState("");
    let item = [];

    useEffect(() => {
        function getItems() {
          axios
            .get("http://localhost:8070/items/get")
            .then((res) => {
                console.log(res.data)
                // setItem(res.data)
                item = (res.data)

                //     for(let i=0;i<items.length;i++){
                //         const filter = res.data.filter(
                //             (items) =>
                //             items.Category === "Books"
                //         );
                //         // console.log(filter[i].Title)
                //         // setItem(filter)
                //         item = filter
                //           console.log(item.Title)
                // }

               
            console.log(item)
                 for(let i=0;i<item.length;i++){

                    console.log(item[i].Title)
                    setTitle(item[i].Title)
         
                }
             
            })
            .catch((err) => {
              alert(err);
            });
        }
    
    
    
        getItems();
      }, []);


    function filterContent(data, userSearch) {
        let result = data.filter(
          (post) =>
            post.Item_name.toLowerCase().includes(userSearch) ||
            post.Brand.toLowerCase().includes(userSearch) ||
            post.Model.toLowerCase().includes(userSearch)
        );
        console.log(userSearch);
        let x = result;
        // createReview(r, x);
        if (result.length != 0) {
          document.getElementById("itemsTxt").innerHTML = "";
        } else if (result.length == 0) {
          document.getElementById("itemsTxt").innerHTML = "No Result Found!";
        }
      }
    
      // search
      function handleSearch(e) {
        let userSearch = e;
        //document.getElementsByTagName("CircleLoader").loading = '{true}';
        document.getElementById("itemsTxt").innerHTML = "";
    
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


  return (

    <div  style={{color:'#3F3232'}}>
            <div className="searchbaar">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar" >
                            <input className="search_input" type="text" name="" onChange={(e) => handleSearch(e.target.value)}/>
                            <a type="button" className="search_icon"  >
                            <img id="img141" src="../images/loupe.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           <br/><br/>
            <div className="row">
                
                <div className="col-3" style={{color:'#3F3232', fontWeight:'bold', marginLeft:'80px'}}>

                    <h4>Other Categories</h4>
                    <span id="link" >
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}} id="link" className="list-group-item list-group-item-action" >
                            Books
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Childrens Books
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Magazines
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Articles
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            News Papers
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Musics
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Movies & Comic Books
                        </a>
                    </span>
                    <span id="link">
                        <a href="#" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                            Educational
                        </a>
                    </span>
                

                </div>
                <div className="col-8">
                <h3>Books</h3>
                <br/><br/>

                <div className="row">
         
                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>HellFire</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>

                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>PlayToys</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>

                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>PlayToys</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>

                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>PlayToys</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>

                    
                </div>

                <br/><br/>

                <div className="row">
                    
                <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Lord Of the Rings</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>
                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Kite Runner</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>
                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>Narnia</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>
                    <div className="col ">
                    <a href="/edit" style={{border:'0px',color:'#3F3232', font:'roboto'}}  id="link" className="list-group-item list-group-item-action" >
                           
                        <img  src = {'../images/book2.jpg'}  className="img-fluid" alt="Responsive "/>
                        <br/>
                        <span>harry Potter</span>
                        <div className="col">
                        &ensp;&ensp;
                         <img id="img141" src="../images/edit.png" />
                         &ensp;&ensp;
                         <img id="img141" src="../images/trash.png" />
                        </div>
                        </a>
                    </div>
                </div>

                </div>

            </div>


            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                   
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    
                    </div>
                </div>
                </div>

    </div>

  );
}
