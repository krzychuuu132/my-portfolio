import React,{ useEffect, useRef, useState } from 'react';
import gsap from 'gsap';


import './Technologies.scss';



const Technologies = ({technologies}) => {

    const [counter,setCounter]  = useState(0);

    const technologiesContentRef = useRef(null);

    const tl = gsap.timeline();

    

    console.log(technologies)

    const handleTechnologyClick  = (e,index) =>{
        setCounter(index);
        gsap.fromTo(e.target,{scale:.7},{scale:1,ease:'EaseInOut'});
        gsap.fromTo(technologiesContentRef.current,{opacity:0},{opacity:1,ease:'EaseInOut'});
    }

    return ( 

        <section className="section technologies" id="technologies">

                <div className="technologies__wrapper">

                    <div className="technologies__content">

                        <h2 className="technologies__content-title section__title">Jakich technologi używam na codzień?</h2>
                        
                        <div className="technologies__content-details" ref={technologiesContentRef}>

                            <p className="technologies__content-text section__text">
                                {technologies[counter].description}
                            </p>

                            <span className="technologies__content-name section__title">{technologies[counter].title}</span>

                           
                        
                        </div>
                    
                    </div>

                    <div className="technologies__slider">

                
                        {
                            technologies.map((technologie,index)=>(

                                <div className={index===counter?"technologies__slider-picture technologies__slider-picture--active":"technologies__slider-picture"} key={index} onClick={(e)=>handleTechnologyClick(e,index)}>
                                        <img src={technologie.img.url} alt="technologies"/>
                                </div>
                            ))
                        }
                    

                    </div>

                </div>

        </section>

     );
}
 
export default Technologies;