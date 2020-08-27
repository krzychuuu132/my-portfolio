import React,{ useRef,useEffect } from 'react';
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About_me from "./About-me/About-me";
import Projects from './Projects/Projects';

import "./Sections.scss";
import Abilities from './Projects/Abilities/Abilities';


const Sections = () => {

    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);

    

    useEffect(()=>{

        const specialists = document.querySelectorAll('.about-me__specialists-specialist');

        const tl = gsap.timeline();
    
        

        gsap.fromTo(specialists,{x: '-=200',opacity:0},{x:0,opacity:1,stagger:.3,duration:1,scrollTrigger:{
            trigger:'.about-me',
            start: 'top 50%',
           // markers:true,
            pinReparent:true,
            toggleActions: "play reverse play reverse"
        }})

        
      
    },[])

    
    

    return ( 
        <>
            <About_me aboutMeRef={aboutMeRef}/>
            <Projects projectsRef={projectsRef}/>
            <Abilities />
        </>
     );
}
 
export default Sections;