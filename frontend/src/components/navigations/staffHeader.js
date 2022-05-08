import React from "react";

function StaffHeader(){

    return(
        
        <div class="navigation">
            <nav class="navbar navbar-expand-xl navbar-light bg-white fixed-top">

                <a class="navbar-brand">

            <div class="image-text" style={{display: 'flex',fontFamily: 'Rambla, sans-serif',marginLeft: '40px'}}>
                <div class="image-text__image" style={{flex: '0 0 auto'}}>
                </div>
                <div class="vl"></div>
                <h1 class=" mb-4 font-weight-bold" id="companyname" style={{fontFamily: 'Rambla, sans-serif',color: '#3F3232',
                    fontWeight: 'bold',fontSize: '25px',marginLeft: '10PX',marginTop: '20px',textShadow: '2px 0px 0px #3F3232' }}>
                Library Management System
                </h1>
            </div>
                </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto" style={{fontSize: '22px',fontWeight: 'bold',color: '#3F3232'}}>

                        <li class="nav-item" style={{ marginRight: '25px',}}>
                            <a class="nav-link" href="/staff/staffHome"  id="overview">Home</a>
                        </li>
                        
                        <li class="nav-item" style={{ marginRight: '25px'}}>
                            <a class="nav-link"  href="#" id="contactus">User Profile</a>
                        </li>
                        
                        <li class="nav-item" style={{ marginRight: '25px'}}>
                        <a class="nav-link"  href="/" id="signout">
                            <button type="button" style={{ backgroundColor: '#F2AB39', border: 'none', width: '100px'}} class="btn btn-primary">Sign Out</button>
                        </a></li>
                        
                    </ul>
                </div>
            </nav>
            <br/><br/><br/><br/>
            {/* <AddItems/> */}
            {/* <Home/> */}
            </div>

            

    )
}

export default StaffHeader

