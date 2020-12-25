import React from 'react';

import Section_title from '../../../Utilities/Section_title/Section_title';


import './Informations.scss';

const Informations = () => {
    return (  
        <section className="section informations">

            <div className="informations__info">

                <div className="informations__info-text">
                        <Section_title text="godziny poświęcone"/>
                        <span className="informations__info-number">122,3334 H</span>
                </div>
    
                <div className="informations__info-text">
                        <Section_title text="zaangażowanie"/>
                        <span className="informations__info-number">122,3334 %</span>
                </div>

                <div className="informations__info-text">
                        <Section_title text="zadowoleni klienci"/>
                        <span className="informations__info-number">57</span>
                </div>

            </div>

        </section>
    );
}
 
export default Informations;