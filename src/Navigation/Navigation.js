import React, { useState } from 'react';

import "./Navigation.scss";

const Navigation = ({navigationRef}) => {

    const [activeMenu,setActiveMenu] = useState(false);

    if(activeMenu) document.body.style.overflowY = "hidden"
    else document.body.style.overflowY = "initial"

    return ( 
        <>
        <nav className="nav" ref={navigationRef}>

            <div className="nav__wrapper">
                        <button className="nav__hamburger" onClick={()=>setActiveMenu(!activeMenu)}></button>
            </div>

            <div className={activeMenu?"nav__menu nav__menu--active":"nav__menu"}></div>

        </nav>
        
        </>
     );
}
 
export default Navigation;