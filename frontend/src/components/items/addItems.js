import React, {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddItems(props){

    const[Title,setTitle] = useState("");
    const[Author,setAuthor] = useState("");
    const[Date,setDate] = useState("");
    const[SubTitle,setSubTitle] = useState("");
    const[Quantity,setQuantity] = useState("");
    const[Price,setPrice] = useState("");
    const[Category,setCategory] = useState("");
    const[Images,setImages] = useState("");
    const[Image,setImage] = useState("");
    const[Description,setDescription] = useState("");
    const[ItemAvailabilityStatus,setItemAvailabilityStatus] = useState("");

    let [errorMsg,setErrorMsg] = useState("");
    let [succMsg, setSuccMsg] = useState("");
    let [flag1, setFlag1] = useState(0);
    
    let [Error2Msg, setError2Msg] = useState("");
  
    let flag3 = 0;

    function sendData(e){

        e.preventDefault();

        let imgPath = Image.split("\\");
        setImages(imgPath[2])
             
        const newItem = {
            Title,
            Author,
            Date,
            SubTitle,
            Quantity,
            Price,
            Description,
            Images : imgPath[2],
            Category,
        }
        console.log(newItem);

        if (checkValidations()) {
            Swal.fire("Please Enter Valid Details!");
          } else {
             axios
            .post("http://localhost:8070/items/add",newItem)
            .then(() => {

            setTitle(" ");
            setAuthor(" ");
            setDate(" ");
            setQuantity(" ");
            setPrice(" ");
            setSubTitle(" ");
            setDescription(" ");
            // setImages(imgPath[2]);
            // setImages(" ");
            setCategory(" ");
      
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Item has been saved",
                showConfirmButton: false,
                timer: 1500,
              });     
              // props.history.push("/shome");
            })
            .catch((err) => {
              alert(err);
      
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: "Please try again!",
              });
            //   props.history.push("/Seller/Home");
            });
          }
      }

      function checkValidations() {
        let checkQuantity = document.getElementById("quantity").value;
        let checkPrice = document.getElementById("price").value;
    
        if (checkQuantity <= 0 || checkQuantity > 100) {
          console.log("q");
          return true;
        }
        if (checkPrice <= 0 || checkPrice > 1000) {
          console.log("p");
          return true;
        }     
      }


    return(

    <div className="items">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Add a New Item</h2>
            <br/><br/>
            <form onSubmit = {sendData} id="create-course-form">
                <div className="row">
                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Title <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                        onChange={(e)=>{
                            setTitle(e.target.value);
                        }}
                        required
                        />
                    </div>
                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Author<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setAuthor(e.target.value);
                        }}
                        required/>
                    </div>
                    <div className="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Date<span style={{color:'red'}}>*</span> </label>
                        <input type="date" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setDate(e.target.value);
                        }}
                        required/>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Rent Price <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="price" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setPrice(e.target.value);
                            if (e.target.value > 1000) {
                              setError2Msg("Rent price cannot exceed 1000");
                              flag3 = 0;
                            } else if (e.target.value <= 0) {
                              setError2Msg("Price cannot be Zero or less");
                              flag3 = 0;
                            } else {
                              setError2Msg("");
                              flag3 = 1;
                            }
                        }}
                        required/>
                    </div>
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Quantity <span style={{color:'red'}}>*</span></label>
                        <input type="number" pattern="[1-9]" Min="1" class="form-control" id="quantity" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setQuantity(e.target.value);
                            if (e.target.value > 100) {
                                setErrorMsg("Quantity cannot be more than 100");
                                setSuccMsg("");
                                flag1 = 0;
                              } else if (e.target.value <= 0) {
                                setErrorMsg("Quantity cannot be Zero or less");
                                setSuccMsg("");
                                flag1 = 0;
                              } else if (e.target.value.length === 0) {
                              } else if (e.target.value > 0 && e.target.value < 200) {
                                setSuccMsg("All Set!");
                                setErrorMsg("");
                                setFlag1(1);
        
                                console.log(flag1);
                                //console.log("asd");
                              } else {
                                setErrorMsg("");
                                flag1 = 1;
                              }
                        }}
                        required/>
                    </div>
                    <div class="col-sm">
                    <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Category <span style={{color:'red'}}>*</span></label>
                        <select class="form-select" aria-label="Default select example" style={{color:'#3F3232',border:'1px solid #3F3232'}} onChange={(e)=>{
                            setCategory(e.target.value);
                            
                        }}
                        required>
                            <option selected>Select the Category</option>
                            <option value="Books">Books</option>
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
                    <label for="formFile" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Select a Cover Image </label>
                    <input class="form-control" type="file" id="formFile" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setImage(e.target.value);
                        }}/>
                       
                    </div>
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>SubTitle </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setSubTitle(e.target.value);
                        }}/>
                    </div>
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Description </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setDescription(e.target.value);
                        }}/>
                    </div>
                </div>
                <br/><br/>
            

                <br/><br/>

                <div className="row" >
                    <div className="col-sm">
                        <span style={{float:'left', color : 'red', fontWeight:'normal'}}>Fields with * is Compulsary !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                    <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right'}}>Submit</button>
                    <button type="reset" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right', marginRight:'30px'}}>Clear</button>

                    </div>
                </div>
            </form>
        </div>

        <br/><br/><br/><br/><br/><br/>
        </div>
    )

}

