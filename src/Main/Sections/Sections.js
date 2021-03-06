import React,{ useRef,useEffect,useState } from 'react';
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { request } from 'graphql-request';

import About_me from "./About-me/About-me";
import Projects from './Projects/Projects';
import Abilities from './Abilities/Abilities';
import Technologies from './Technologies/Technologies';
import Informations from './Informations/Informations';

import "./Sections.scss";
import Contact from './Contact/Contact';




const Sections = ({mainRef}) => {

    const [dataPage,setDataPage] = useState([]);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    // ABILITIES
    const abilitiesElementsRef = useRef(null);
    const abilitiesContentRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    

    useEffect(()=>{

        const specialists = document.querySelectorAll('.about-me__specialists-specialist');

        const tl = gsap.timeline();

        console.log(abilitiesElementsRef)
    
        if(dataPage.length !==0){

            // ABILITIES SECTION ANIMATIONS

               gsap.fromTo(abilitiesElementsRef.current.children,{y: '+=400',opacity:0},{y:0,opacity:1,stagger:.3,duration:.6,scrollTrigger:{
                trigger:'.abilities',
                start: 'top 100',
             //   markers:true,
                pinReparent:true,
                toggleActions: "play reverse play reverse"
            }})

            gsap.fromTo(abilitiesContentRef.current.children,{scale:.5,opacity:0},{scale:1,opacity:1,stagger:.3,duration:.6,scrollTrigger:{
                trigger:'.abilities',
                start: 'top 400',
            //   markers:true,
                pinReparent:true,
                toggleActions: "play reverse play reverse"
            }})
        }

        gsap.fromTo(specialists,{x: '-=200',opacity:0},{x:0,opacity:1,stagger:1,duration:1,scrollTrigger:{
            trigger:'.about-me',
            start: 'top 50%',
           // markers:true,
            pinReparent:true,
            toggleActions: "play reverse play reverse"
        }})

        console.log(document.querySelectorAll('.contact > .wrapper > div'))

        gsap.fromTo(document.querySelectorAll('.contact > .wrapper > div'),{y: '100%',opacity:0},{y:0,opacity:1,stagger:.3,duration:.6,ease:'EaseInOut',scrollTrigger:{
            trigger:'.contact',
            start: 'top 500',
            pinReparent:true,
            toggleActions: "play reverse play reverse"
        }})
      
    },[dataPage])

    
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
                      demoLink
                      githubLink
                      projectTechnologie{
                        img{
                          id
                          url
                        }
                      }
                  }

                  technologies{
                      title
                      description
                      img{
                          url
                      }
                  }
              }
          `
            );
      
            setDataPage(data);
          };
      
          fetchData();
    },[]);

    const { projects , technologies  } = dataPage;

    return ( 
       
           
         dataPage.length !== 0 ?(
        <>
            <About_me aboutMeRef={aboutMeRef}/>
            <Projects projectsRef={projectsRef} projects={projects}/>
            <Abilities abilitiesElementsRef={abilitiesElementsRef} abilitiesContentRef={abilitiesContentRef}/>
            <Informations />
            <Technologies technologies={technologies}/>
            <Contact contactRef={contactRef}/>
            
        </>)

            :null
          
        
        
     );
}
 
export default Sections;