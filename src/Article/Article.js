import React from 'react';

import Contact_sources  from '../Utilities/Contact_sources/Contact_sources';
import Name_surname from "../img/name-surname.png";

import "./Article.scss";


const Article = () => {
    return ( 
        <article className="article">

            <div className="article__content">

                <button className="article__btn"><span className="fas fa-play article__btn-icon"></span>moje projekty </button>

                <div className="article__info">

                    <div className="article__info-picture">
                            <img src={Name_surname} alt="Krzysztof Urban" className="article__info-img"/>
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