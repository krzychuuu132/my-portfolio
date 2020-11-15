import React,{ useState,useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar,EffectCube,Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap';
import { CSSTransition, SwitchTransition }  from 'react-transition-group';

import Section_btn from '../../../Utilities/Section_btn/Section_btn';
import Section_title from '../../../Utilities/Section_title/Section_title';
import article_picture from '../../../img/article-picture-1.jpg'

// SWIPER
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

//STYLES

import "./Projects.scss";


SwiperCore.use([ EffectCube,Navigation, Pagination, Scrollbar,Controller]);


const Projects = ({projectsRef,projects}) => {

        const tl = gsap.timeline({repeatDelay:0});

        
    
        // HOOKS

        // ~useState
        const [counter,setCounter] = useState(0);

        // ~useRef
        const projectDescriptionRef = useRef(null);
        const projectTitleRef  =  useRef(null);

    const slideChange  = (activeIndex) =>{
      //  console.log(activeIndex,counter)
      //  tl.set([projectTitleRef.current,projectDescriptionRef.current],{opacity:0});

      //  tl.fromTo(projectTitleRef.current,{opacity:0,x:100},{x:0,ease: "elastic.out(1, 0.3)",opacity:1})
       // .fromTo(projectDescriptionRef.current,{opacity:0,scale:.5},{scale:1,ease: "elastic.out(1, 0.3)",opacity:1});
    }

    return ( 

        <section className="section projects" ref={projectsRef} id="projects">

            <div className="projects__wrapper">

            

            <div className="projects__description section__description">
                <Section_title text="moje projekty"/>

                <SwitchTransition 
                mode="out-in"
            
                >
                    <CSSTransition key={counter} addEndListener={
                            (node,done)=>{
                                console.log(counter)
                                gsap.set([node,node.nextElementSibling ],{opacity:0})
                           
                             gsap.to([node,node.nextElementSibling ],{opacity:1,onComplete:done,delay:.2})
                            }
                    }>

                    <>
               
                    <h2 className="projects__description-title" ref={projectTitleRef}>{projects[counter].title}</h2>

                    <p className="projects__description-text section__text" ref={projectDescriptionRef}>
                        {projects[counter].description}
                    </p>
                    </>

                    </CSSTransition>
                </SwitchTransition>

                <div className="projects__links">
                        <a href={projects[counter].demoLink} target="blank" className="projects__links-link"><Section_btn title="Podgląd dema" section="projects"/></a>
                          
                        <a href={projects[counter].githubLink} target="blank" className="projects__links-link"><Section_btn title="Podgląd GitHuba" section="projects"/> </a>
                        
                </div>
            </div>

            <div className="projects__view">

                <Swiper
                effect="cube"
                navigation
                pagination
                onSlideChange={({activeIndex}) => setCounter(activeIndex)}
                >
                   
                   {
                       projects.map((project,index)=>(
                            <SwiperSlide key={index} style={{backgroundImage:`url(${project.img.url})`}}></SwiperSlide>
                       ))
                   }
                    
                </Swiper>

            </div>

        </div>
        </section>

     );

}
 
export default Projects;