import React from 'react';

import './Section_btn.scss';

const Section_btn = ({title,section,id}) => {
    return ( 

            <button className={`section__btn ${section}__btn`}>
                <span class={`fas fa-play section__btn-icon ${section}__btn-icon`}></span>{title}
            </button>

     );
}
 
export default Section_btn;