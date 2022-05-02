import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function EditItems(props){

  const[items,setItems] = useState("");

  let [succMsg,setSuccMsg] = useState("");
  let [Error2Msg,setError2Msg] = useState("");
  let [Err3Msg,setErr3Msg] = useState("");

  let [errorMsg,setErrorMsg] = useState("");

  let flag = 0;

  const [data, setData] = useState({
    // Quantity: "",
    // Price: "",
    // Category: "",
    // Description: "",
  });



    const[Quantity,setQuantity] = useState("");
    const[Price,setPrice] = useState("");
    const[Category,setCategory] = useState("");
    const[Description,setDescription] = useState("");

    let objectId = "";


    useEffect(()=>{
        function getItems(){
            // objectId = localStorage.getItem("CustomerID");
            // objectId = props.match.params.id;
            console.log(objectId)
            axios.get("http://localhost:8070/items/get/625bf949653c75bea85783f0")
            .then((res)=>{
                console.log(res)
                setItems(res.data)
            }).catch((err)=>{
                alert(err.errorMsg)    
            })
        }
        getItems();
    },[])

    console.log(items.Price)


      function updateItem(e) {
   
        const objectId = "625bf949653c75bea85783f0";
        e.preventDefault();
    
        const data = {
          Price,
          Quantity,
          Category,
          Description
        }

        console.log(data);
      
          axios
          .patch("http://localhost:8070/items/update/" + objectId, data)
          .then(() => {

            setQuantity(" ");
            setPrice(" ");
            setDescription(" ");
            setCategory(" ");
  
    
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Item has been updated',
              showConfirmButton: false,
              timer: 1500
            })
    
            // props.history.push("/scategory");
      
          })
          .catch((err) => {
            alert(err);
       
          });
        
        
      }
    

    return(

    <div className="items">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit the {items.Category}</h2>
            <br/><br/>
            <form onSubmit = {updateItem} id="create-course-form">
                <div className="row">

                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Title  </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        placeholder={items.Title} disabled/>
                    </div>

                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Author </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
                        placeholder={items.Author} disabled/>
                    </div>

                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Added Date </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.AddedDate} disabled />
                    </div>

                </div>
                <br/><br/>
                <div className="row">
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Rent Price  </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Price} 
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        />
                    </div>

                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Quantity </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        placeholder={items.Quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value);
                        }}
                        />
                    </div>

                    <div class="col-sm">
                    <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Category <span style={{color:'red'}}>*</span></label>
                        <select class="form-select" aria-label="Default select example" style={{color:'#3F3232',border:'1px solid #3F3232'}} onChange={(e)=>{
                            setCategory(e.target.value);
                            
                        }}
                        required>
                            <option selected>{items.Category}</option>
                            {/* <option value="Books">Books</option> */}
                            <option value="Children Books">Children Books</option>
                            <option value="Articles">Articles</option>
                            <option value="Magazines">Magazines</option>
                            <option value="Movies and Comic Books">Movies and Comic Books</option>
                            <option value="News Papers">News Papers</option>
                            <option value="Educational">Educational</option>
                            <option value="Musics">Musics</option>
                        </select>
                    </div>
                </div>
                <br/><br/>
       
                <div className="row">
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Description </label>
                        <textarea type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
                        placeholder={items.Description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        />
                    </div>
                  
                </div>

                <br/><br/>

                <div className="row" >
                    <div className="col-sm" style={{float:'right'}}>
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled fields cannot be edited !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                        <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}
                        // onClick={() => updateItem(items._id)}
                        >Submit</button>
                       
                        <button type="reset" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button>
                        
                    </div>
                </div>
            </form>
        </div>
        </div>
    )

}

