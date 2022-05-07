import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import p1 from "../../images/library2.jpg";
import p2 from "../../images/library4.jpg";


export default function WelcomePage(props) {

  return (
  <div className="text-center">
    <img src={p2}/>
    <a href="/customer/home">
        <button type="button" class="btn btn-primary btn-lg">Customer Login</button>
    </a>

    <a href="/staff/staffHome">
        <button type="button" class="btn btn-primary btn-lg">Staff Login</button>
    </a>

  </div>
  );
}
