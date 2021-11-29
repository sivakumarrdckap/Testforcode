import React from 'react';
import { useHistory , Link } from "react-router-dom";
import logo from "../../../../image/logo_ev_02.png";

export default function Logo() {
    let history = useHistory();
    return (
        <div  className="logo">
            <Link to="/"><img src={logo} alt="site-Logo" /></Link>
        </div>
    )
}
