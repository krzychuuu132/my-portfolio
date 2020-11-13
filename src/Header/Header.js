import React,{useEffect,useRef,useState,useContext} from 'react';
import gsap from "gsap";

import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";

import NavigationContext from '../context/NavigationContext';

import "./Header.scss";

const Header = () => {

    const navigationContext = useContext(NavigationContext);

    const [navWidth,setNavWidth] = useState(0);
    const navigationRef = useRef(null);

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        

        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
        
    },[navWidth])

    let scrolling = false;

    const handleScroll = (e) =>{
     
        const scrollTop = document.body.getBoundingClientRect().top;
       

        if(scrollTop <=100){
            if(navWidth <= 100) {

                const scrollValue  = (scrollTop/3)*-1+35;
               
                if(navWidth <=100) setNavWidth(scrollValue>100?100:scrollValue)
                }
           
        }
        console.log(navigationContext.activeMenu)
        if(navigationContext.activeMenu){
            navigationContext.toogleActiveMenu(false);
        }
     
    }

    gsap.to(navigationRef.current,{maxWidth:`${navWidth}%`,duration:.5,ease:'linear'})

    return ( 

         <header className="header">
                <div className="wrapper">
                    <Logo />
                    <Navigation navigationRef={navigationRef} scrolling={scrolling}/>
                </div>
         </header>
         

     );

}
 
export default Header;
