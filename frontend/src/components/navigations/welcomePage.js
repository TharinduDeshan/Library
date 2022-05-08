import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import p1 from "../../images/library2.jpg";
import p2 from "../../images/library4.jpg";

import "../../css/InitialPage.css"


export default function WelcomePage(props) {

  const history = useNavigate();

  function customerLogin(){
    history(`/customer/home`)
}

function StaffLogin(){
    // history(`/staff/staffHome`)
    history(`/login`)
}

return (
    <div className = "IP">
        
        <div class="hero-image" >
            <div class="hero-text">
             <br/><br/>   {/* <img src={back}/> */}
                {/* <h1 style={{ fontSize: '100px', fontFamily:"Arial"}}>Tech Scope</h1>
                <h3 style={{ fontSize: '40px'}}>See what's selling best !</h3> */}

            </div>
            <div class="SigninButtons">
                <br/><br/>
                <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad" onClick = {() => customerLogin()}>Get started</button> <br />
                <button type="button" class="btn btn-primary mb-2 btn-lg btn-grad" onClick = {() => StaffLogin()}>Staff ?</button>
            </div>
        </div>

    </div>

  );
}
