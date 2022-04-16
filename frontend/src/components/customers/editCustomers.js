// import React, {useState} from "react";
// import Swal from "sweetalert2";
// import axios from "axios";

// export default function EditCustomer(){

//     return(

// <div className="customer">
//         <div className="container" style={{width:'80%'}}>
//             <br/><br/>

//             <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Edit the {customer.Category}</h2>
//             <br/><br/>
//             <form onSubmit = {updateCustomer} id="create-course-form">
//                 <div className="row">

//                     <div className="col-sm-4">
//                         <label for="Inputc-id" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer ID  </label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
//                         placeholder={customer.CID} readonly/>
//                     </div>

//                     <div className="col-sm-4">
//                         <label for="Input-name" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer Name </label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
//                         placeholder={customer.CName} />
//                     </div>

//                     <div class="col-sm-4">
//                         <label for="Input-nic" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>NIC</label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
//                         placeholder={customer.Nic}  />
//                     </div>

//                 </div>
//                 <br/><br/>
//                 <div className="row">
//                     <div class="col-sm-4">
//                         <label for="Input-phone" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Phone Number <span style={{color:'red'}}>*</span> </label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
//                         placeholder={customer.Pnone} />
//                     </div>
//                     <div class="col-sm-4">
//                         <label for="Input-address" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Address <span style={{color:'red'}}>*</span></label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
//                         placeholder={customer.Address} />
//                     </div>
//                     <div class="col-sm-4">
//                         <label for="Input-email" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span> </label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
//                         placeholder={customer.Email} />
//                     </div>
//                 </div>
//                 <br/><br/>

//                 <div className="row">
//                     <div class="col-sm-4">
//                         <label for="Input-occupcation" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Occupcation <span style={{color:'red'}}>*</span> </label>
//                         <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}} 
//                         placeholder={customer.Occupcation} />
//                     </div>
//                     <div class="col-sm-4">
//                         <label for="Input-gender" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Gender<span style={{color:'red'}}>*</span></label>
//                         <select name="Member" id="member">
//                             <option value="Yes">Please select</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                         </select>
//                     </div>
//                     <div class="col-sm-4">
//                         <label for="Input-member" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member<span style={{color:'red'}}>*</span> </label>
                        
//                         <select name="Member" id="member">
//                             <option> Please select</option>
//                             <option value="Yes">Yes</option>
//                             <option value="No">No</option>
//                         </select>
    
//                     </div>
//                 </div>
//                 <br/><br/>

//                 <div className="row" >
//                     <div className="col-sm-6" style={{float:'right'}}>
//                         <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Disabled field cannot be edited !</span>
//                     </div>
//                     <div className="col-sm-6" style={{float:'right'}}>
//                         <button type="submit" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}
//                         // onClick={() => updateItem(items._id)}
//                         >Submit</button>
                       
//                         <button type="cancel" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Clear</button>
//                   <br/>
//                     </div>
//                 </div>
                
//             </form>
//         </div>
            
//      </div>
//     )

// }
