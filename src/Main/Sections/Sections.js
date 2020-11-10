import React,{ useRef,useEffect,useState } from 'react';
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { request } from 'graphql-request';

import About_me from "./About-me/About-me";
import Projects from './Projects/Projects';
import Abilities from './Abilities/Abilities';

import "./Sections.scss";



const Sections = () => {

    const [dataPage,setDataPage] = useState([]);
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

    
    useEffect(()=>{
        const fetchData = async () => {
            const  data  = await request(
              'https://api-eu-central-1.graphcms.com/v2/ckh2ngy42cywj01xx857q64c4/master',
              `
              {
                  projects{
                      img{
                          url
                      }
                      description
                      title
                  }
              }
          `
            );
      
            setDataPage(data);
          };
      
          fetchData();
    },[]);

    const { projects } = dataPage;

    return ( 
       
           
         dataPage.length !== 0 ?(
        <>
            <About_me aboutMeRef={aboutMeRef}/>
            <Projects projectsRef={projectsRef} projects={projects}/>
            <Abilities />
        </>)

            :null
          
        
        
     );
}
 
export default Sections;