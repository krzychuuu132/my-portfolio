import React, { useState , useRef,useContext } from 'react';
import { Link } from "react-router-dom";
import gsap from "gsap";

import Contact_sources from '../../Utilities/Contact_sources/Contact_sources';

import "./Navigation.scss";
import Section_title from '../../Utilities/Section_title/Section_title';

// CONTEXT
import NavigationContext from '../../context/NavigationContext';



const Navigation = ({navigationRef}) => {

    

    const contactRef = useRef(null);
    const footerRef = useRef(null);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const navWrapperRef = useRef(null);

    const navigationContext = useContext(NavigationContext);

    const activeMenu = navigationContext.activeMenu;

    if(activeMenu) {
        gsap.to(navWrapperRef.current,{x:'300%',duration:0});
        gsap.to(navigationRef.current.previousSibling,{alpha:0,scale:.5,pointerEvents:'none'});
        gsap.to(menuRef.current,{x:0,delay:.1});
        gsap.to(footerRef.current,{y:0,delay:.1});
        gsap.to(contactRef.current,{x:0,delay:.1});
        gsap.to(navWrapperRef.current,{x:0,delay:.9,duration:.55,ease: "expo.out"});
        
    }

    else {

        navigationRef.current ? 
        gsap.to(navigationRef.current.previousSibling,{alpha:1,scale:1,pointerEvents:'initial',delay:1.1}):
        console.log('');
        
        gsap.to(menuRef.current,{x:'101%',delay:1});
        gsap.to(contactRef.current,{x:'-100%',delay:1});
        gsap.to(footerRef.current,{y:'100%',delay:1});
       
     
    }

    return ( 
        
   

        <nav className={activeMenu?"nav nav--active":"nav"} ref={navigationRef}>

            <div className="nav__wrapper" ref={navWrapperRef}>
                        <button 
                        className={activeMenu?"nav__hamburger nav__hamburger--active":"nav__hamburger"} 
                        ref={hamburgerRef}
                        onClick={()=>navigationContext.toogleActiveMenu(!activeMenu)}>
                                    <span className="nav__hamburger-backgr"></span>
                                   <span className="nav__hamburger-close">close</span>
                            </button>
                     
                        
            </div>

            <div className={activeMenu?"nav__menu nav__menu--active":"nav__menu"}>

                <div className="nav__menu-info">

                    <div className="nav__menu-contact" ref={contactRef}>

                        <Section_title text="skontaktuj się"/>
                        <h2 className="nav__menu-contact_text">lorem ipsum</h2>

                    </div>

                    <div className="nav__menu-footer" ref={footerRef}>

                        <h2 className="nav__menu-footer_title">Znajdź mnie</h2>

                       <Contact_sources/>

                    </div>

                </div>
                
                <div className="menu"ref={menuRef}>
                    <ul className="menu__list">
                        <li className="menu__item"><Link to="#" className="menu__link" >kim jestem</Link></li>
                        <li className="menu__item"><Link to="#" className="menu__link" >Projekty</Link></li>
                        <li className="menu__item"><Link to="#" className="menu__link" >Umiejętności</Link></li>
                        <li className="menu__item"><Link to="#" className="menu__link" >Technologie</Link></li>
                        <li className="menu__item"><Link to="#" className="menu__link" >Kontakt</Link></li>
                    </ul>

                       <Contact_sources />
                       <div className="nav__wrapper-canvas"></div>
                </div>

             
            </div>

        </nav>
  
      
     );
}
 
export default Navigation;