import React, { useRef } from 'react';
import {Link} from "react-router-dom"

import My_logo from "../../img/My_logo.png"; 

import "./Logo.scss";

const Logo = () => {

    const logoBackRef = useRef(null);

    const handleMouseMove = (e) =>{
        const x = e.clientX /50;
        const y = e.clientY /10;

        logoBackRef.current.style.transform = `translate(${x}px,${y}px)`


    }

    return ( 
        <div className="logo" onMouseMove={handleMouseMove}>
            <Link to="/" className="logo__link" rel="Home"><img src={My_logo} alt="Krzysztof-logo"  className="logo__picture"/></Link>
            <div className="logo__backgr" ref={logoBackRef}/>
        </div>
     );
}
 
export default Logo;
