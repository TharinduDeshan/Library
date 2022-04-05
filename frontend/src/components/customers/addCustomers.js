import React, {useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function AddCustomer(){

    return(

        <div className="customer">
        <div className="container" style={{width:'80%'}}>
            <br/><br/>
            <h2 className="text-center" style={{color:'#3F3232', fontWeight:'bold'}}>Add a New customer</h2>
            <br/><br/>
            <form onSubmit = {sendData} id="create-course-form">
                <div className="row">
                    <div className="col-sm-4">
                        <label for="Inputc-id" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer ID </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232' }} 
                       /* onChange={(e)=>{
                            setTitle(e.target.value);
                        }}*/
                        required
                        />
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-name" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer Name </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        // onChange={(e)=>{
                        //     setAuthor(e.target.value);
                        // }}
                        required/>
                    </div>
                    <div className="col-sm-4">
                        <label for="Input-nic" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Customer NIC </label>
                        <input type="date" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        // onChange={(e)=>{
                        //     setDate(e.target.value);
                        // }}
                        required/>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                <div class="col-sm-4">
                        <label for="Input-phone" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Phone Number <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        // onChange={(e)=>{
                        //     setPrice(e.target.value);
                        // }}
                        required/>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-address" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Address <span style={{color:'red'}}>*</span></label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        // onChange={(e)=>{
                        //     setQuantity(e.target.value);
                        // }}
                        required/>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-email" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Email<span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        // onChange={(e)=>{
                        //     setCategory(e.target.value);
                        // }}
                        required/>
                    </div>
                </div>
                <br/><br/>

                <div className="row">
                <div class="col-sm-4">
                        <label for="Input-occupcation" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Occupcation <span style={{color:'red'}}>*</span> </label>
                        <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" style={{border:'1px solid #3F3232'}}
                        // onChange={(e)=>{
                        //     setPrice(e.target.value);
                        // }}
                        required/>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-gender" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}> Gender<span style={{color:'red'}}>*</span></label>
                        <select name="Member" id="member">
                            <option value="Yes">Please select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <label for="Input-member" class="form-label" style={{color:'#3F3232', fontWeight:'bold'}}>Member<span style={{color:'red'}}>*</span> </label>
                        
                        <select name="Member" id="member">
                            <option> Please select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
    
                    </div>
                </div>
                <br/><br/>

                <div className="row" >
                    <div className="col-sm-6">
                        <span style={{float:'left', color : '#3FC1C9', fontWeight:'bold'}}>Fields with * is Compulsary !</span>
                    </div>
                    <div className="col-sm-6" style={{float:'right'}}>
                        <div className="col-sm-3" style={{float:'right'}}>
                            <button type="cancel" class="btn" style={{backgroundColor:'#F2AB39',color:'#f5f5f5', fontWeight:'bold', width:'120px', float:'right'}}>Clear</button>
                        </div>
                        <div className="col-sm-3" style={{float:'right'}}>
                            <button type="submit" class="btn" style={{backgroundColor:'#3FC1C9',color:'#f5f5f5', fontWeight:'bold', width:'100px', float:'right', marginRight:'30px'}}>Submit</button>
                        </div>
                    //yyuyuyuy
                    </div>
                </div>
                <div></div>
            </form>
        </div>
        </div>

    )
}

    



