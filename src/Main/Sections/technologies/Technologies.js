import React,{ useEffect, useRef, useState } from 'react';
import gsap from 'gsap';


import './Technologies.scss';
import Section_title from '../../../Utilities/Section_title/Section_title';



const Technologies = ({technologies}) => {

    const [counter,setCounter]  = useState(0);

    const technologiesContentRef = useRef(null);


    
    useEffect(()=>{

        let interval = setInterval(()=>{
           
         counter === technologies.length -1 ? setCounter(0) :   setCounter(prevState=>++prevState);handleTechnologyClick('','',true);
        },10000)

       return ()=>{
           clearInterval(interval);
       }
    },[counter])
  

    const handleTechnologyClick  = (e,index,active = false) =>{
       

       active ?  console.log() : setCounter(index); gsap.fromTo(e.target,{scale:.7},{scale:1,ease:'EaseInOut'});
        gsap.fromTo(technologiesContentRef.current,{opacity:0},{opacity:1,ease:'EaseInOut'});
    }

    return ( 

        <section className="section technologies" id="technologies">

                <div className="technologies__wrapper">

                    

                    <div className="technologies__content">

                    <Section_title text="technologie"/>

                        <h2 className="technologies__content-title section__title">Jakich technologi używam na codzień ?</h2>
                        
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

                                <>

                                <div className={index===counter?"technologies__slider-picture technologies__slider-picture--active":"technologies__slider-picture"} key={index} onClick={(e)=>handleTechnologyClick(e,index)}>
                                        <img src={technologie.img.url} alt="technologies" />
                                </div>
                                

                                </>
                            ))
                        }

                        <div className="technologies__slider-dots">

                        {
                            
                            technologies.map((technologie,index)=>(
                                <div className="technologies__slider-dots-dot" key={index} style={index === counter ? {backgroundColor : "#e6d53fcb"}:null} onClick={()=>setCounter(index)}></div>
                            ))
                                
                        }

                        </div>

                    </div>

                </div>

        </section>

     );
}
 
export default Technologies;