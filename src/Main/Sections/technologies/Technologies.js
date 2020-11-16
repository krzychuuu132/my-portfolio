import React,{ useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import SwiperCore, { Navigation, Pagination, Scrollbar,EffectFade,Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

import './Technologies.scss';

SwiperCore.use([ EffectFade, Navigation, Pagination, Scrollbar,Controller]);

const Techologies = ({technologies}) => {

    const [counter,setCounter]  = useState(0);

    const technologiesContentRef = useRef(null);

    const tl = gsap.timeline();

    useEffect(()=>{

      
    })

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

                            <span className="technologies__content-text section__specialists-description">Lorem ipsum dolor</span>
                        
                        </div>
                    
                    </div>

                    <div className="technologies__slider">

                    <Swiper
                    effect="slide"
                    controller
                    navigation
                    pagination
                    >
                        <SwiperSlide>
                        {
                            technologies.map((technologie,index)=>(

                                <div className="technologies__slider-picture" key={index}>
                                        <img src={technologie.img.url} alt="technologies"/>
                                </div>
                            ))
                        }
                        </SwiperSlide>
                      
      
                    </Swiper>

                    </div>

                </div>

        </section>

     );
}
 
export default Techologies;