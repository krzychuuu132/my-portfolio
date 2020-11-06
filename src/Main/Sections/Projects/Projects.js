import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar,EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Section_title from '../../../Utilities/Section_title/Section_title';
import article_picture from '../../../img/article-picture-1.jpg'

import "./Projects.scss";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

SwiperCore.use([ EffectCube,Navigation, Pagination, Scrollbar]);




const Projects = ({projectsRef}) => {

    return ( 

        <section className="section projects" ref={projectsRef}>

            <div className="projects__wrapper">

            <div className="projects__description section__description">
                <Section_title text="moje projekty"/>
                <p className="projects__description-text section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend finibus vestibulum. Nam mattis massa in mauris tempor facilisis.</p>

                <p className="projects__description-text section__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend finibus vestibulum. Nam mattis massa in mauris tempor facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend finibus vestibulum. Nam mattis massa in mauris tempor facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing . Vivamus eleifend finibus vestibulum. Nam mattis massa in mauris tempor facilisis.
                </p>

                <div className="projects__links">
                        <button className="section__btn undefined__btn"><span class="fas fa-play section__btn-icon"></span>Podgląd dema</button>
                        <button className="section__btn undefined__btn"><span class="fas fa-play section__btn-icon"></span>Podgląd GitHuba</button>
                </div>
            </div>

            <div className="projects__view">

                <Swiper
                effect="cube"
                navigation
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={article_picture} alt="project-picture"/></SwiperSlide>
                    <SwiperSlide><img src={article_picture} alt="project-picture"/></SwiperSlide>
                    <SwiperSlide><img src={article_picture} alt="project-picture"/></SwiperSlide>
                    <SwiperSlide><img src={article_picture} alt="project-picture"/></SwiperSlide>
                    
                </Swiper>

            </div>

        </div>
        </section>

     );

}
 
export default Projects;