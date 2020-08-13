import React from 'react';

import My_logo from "../img/My_logo.png"; 

import "./Logo.scss";

const Logo = () => {
    return ( 
        <img src={My_logo} alt="my-logo" style={{zIndex:0,margin:'5px 0'}}/>
     );
}
 
export default Logo;
