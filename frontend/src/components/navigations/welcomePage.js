import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import p2 from "../../images/home5.jpg";


export default function WelcomePage(props) {

  return (
  <div className="text-center">
    <a href="/customer/home">
        <button type="button" class="btn btn-primary btn-lg">Customer Login</button>
    </a>

    <a href="/staff/staffHome">
        <button type="button" class="btn btn-primary btn-lg">Staff Login</button>
    </a>

  </div>
  );
}
