import React,{useEffect,useRef,useState} from 'react';
import gsap from "gsap";

import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";

import "./Header.scss";

const Header = () => {

 

    const [navWidth,setNavWidth] = useState(0);
    const navigationRef = useRef(null);

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        

        return ()=>{
           // window.removeEventListener(handleScroll)
        }
        
    },[navWidth])

    const handleScroll = (e) =>{
     
        const scrollTop = document.body.getBoundingClientRect().top;
       

        if(scrollTop <=100){
            if(navWidth <= 100) {

                const scrollValue  = (scrollTop/3)*-1+35;
               
                if(navWidth <=100) setNavWidth(scrollValue>100?100:scrollValue)
                }
           
        }
     
    }

    gsap.to(navigationRef.current,{maxWidth:`${navWidth}%`,duration:.5,ease:'linear'})

    return ( 

         <header className="header">
                <Logo/>
                <Navigation navigationRef={navigationRef} handleScroll={handleScroll}/>
               
         </header>
         

     );

}
 
export default Header;
