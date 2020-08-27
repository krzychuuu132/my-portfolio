import React,{useState,useEffect} from 'react';

import Contact_sources  from '../Utilities/Contact_sources/Contact_sources';
import {ReactComponent as Name_surname } from "../img/KU.svg";
import Article_picture_1 from "../img/article-picture-1.jpg";
import Article_picture_2 from "../img/article-picture-2.jpg";
import Article_picture_3 from "../img/article-picture-3.jpg";



import "./Article.scss";


const Article = () => {

    const sliderSources = [Article_picture_1,Article_picture_2,Article_picture_3];

    const [sliderNumber,setSliderNumber] = useState(0);

    

    const changeImg = () => setSliderNumber(prevState=>prevState===sliderSources.length-1?0:++prevState);
    

    useEffect(()=>{
        const interval = setInterval(changeImg,600);

        return () =>{
            clearInterval(interval);
        }
    },[]);



    return ( 
        <article className="article">

            <div className="article__content">

                <button className="article__btn"><span className="fas fa-play article__btn-icon"></span>moje projekty </button>

                <div className="article__info">

                    <div className="article__info-picture">
                            <Name_surname  />

                            <div className="article__info-imgs">
                                    <img src={sliderSources[sliderNumber]} alt={`Article-picture-${sliderNumber+1}`} className="article__info-imgs_img"/>
                            </div>
                    </div>

                    
                    <h2 className="article__info-position">junior front end developer</h2>
                    <p className="article__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium ante ligula, vitae lobortis nunc egestas semper. Nullam nec pulvinar purus, eu rutrum nisl. </p>
                </div>

                <button className="article__btn"><span className="fas fa-play article__btn-icon"></span>skontaktuj się </button>

            </div>

            <Contact_sources />

        </article>
     );
}
 
export default Article