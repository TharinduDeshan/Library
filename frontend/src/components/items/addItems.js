import React, {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddItems(){

    const[Title,setTitle] = useState("");
    const[Author,setAuthor] = useState("");
    const[Date,setDate] = useState("");
    const[SubTitle,setSubTitle] = useState("");
    const[Quantity,setQuantity] = useState("");
    const[Price,setPrice] = useState("");
    const[Category,setCategory] = useState("");
    const[Images,setImages] = useState("");
    const[Description,setDescription] = useState("");
    const[ItemAvailabilityStatus,setItemAvailabilityStatus] = useState("");

    let [errorMsg,setErrorMsg] = useState("");



    function sendData(e){

        e.preventDefault();

        // customerid  = localStorage.getItem("CustomerID");
             
        const newItem = {
            Title,
            Author,
            Date,
            SubTitle,
            Quantity,
            Price,
            Description,
            Images,
            Category,
            // CustomerID
        }
    
       
        console.log(newItem);
  
        axios.post("http://localhost:8070/items/add",newItem).then(()=>{
  
          setTitle(" ");
          setAuthor(" ");
          setDate(" ");
          setQuantity(" ");
          setPrice(" ");
          setSubTitle(" ");
          setDescription(" ");
          setImages(" ");
          setCategory(" ");

        
        
            Swal.fire({
              title: "Good job!",
              text: "You send the messege!",
              icon: "success",
              button: "ok!"
              
          });
          
       
          
        }).catch((err) =>{
          alert(err)
          
          setErrorMsg(err.response.data.error);
        })
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
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setPrice(e.target.value);
                        }}
                        required/>
                    </div>
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Quantity <span style={{color:'red'}}>*</span></label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setQuantity(e.target.value);
                        }}
                        required/>
                    </div>
                    <div class="col-sm">
                        <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                            setCategory(e.target.value);
                        }}>
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
                        {/* <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Category<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setCategory(e.target.value);
                        }}
                        required/> */}
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                <div class="col-sm">
                    <label for="formFile" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Select a Cover Image </label>
                    <input class="form-control" type="file" id="formFile" style={{border:'1px solid #3F3232'}}
                        onChange={(e)=>{
                            setImages(e.target.value);
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
                {/* <div className="row">
                    <div class="col-sm">
                        <label for="exampleInputEmail1" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Description </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp"/>
                    </div>
                  
                </div> */}

                <br/><br/>

                <div className="row" >
                    <div className="col-sm">
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Fields with * is Compulsary !</span>
                    </div>
                    <div className="col-sm" style={{float:'right'}}>
                    <button type="cancel" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}>Clear</button>
                    <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )

}

