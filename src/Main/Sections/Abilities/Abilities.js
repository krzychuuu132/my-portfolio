import React from 'react';
import Section_title from '../../../Utilities/Section_title/Section_title';

import "./Abilities.scss";

const Abilities = ({abilitiesElementsRef,abilitiesContentRef}) => {
    return ( 
        <section className="section abilities" id="abilities">

            <div className="abilities__wrapper">

                <Section_title text="moje umiejętności"/>
                
                <div className="abilities__content" ref={abilitiesContentRef}>

                        <h2 className="abilities__skills">Jakie skille posiadam ?</h2>

                        <p className="section__text abilities__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget justo pellentesque, fermentum velit vel, dictum lorem. Fusce vel ipsum sapien. Vivamus fringilla ut nisi sit amet vehicula. Vestibulum tempus facilisis eros et efficitur. Phasellus velit elit, ullamcorper eu diam a, mollis mollis augue. Phasellus accumsan convallis ipsum, non sagittis eros volutpat vitae. Donec vitae laoreet felis.
                        </p>

                        <p className="section__text abilities__text">
                            Quisque at est massa. Maecenas aliquet odio ligula, eget congue mauris volutpat vitae. Quisque vitae dictum ante. Morbi cursus mi vel volutpat finibus. In ac metus ac nisl tristique hendrerit. Phasellus dapibus ultricies feugiat. Etiam luctus varius pulvinar. Quisque vel massa dolor.
                        </p>

                </div>

                <div className="abilities__elements" ref={abilitiesElementsRef}>
            

                    <div className="abilities__specialists-specialist section__specialists-specialist">

                            <div className="abilities__specialists-btn section__specialists-btn" >front-end</div>
                            <p className="abilities__specialists-description section__specialists-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                                Quisque at est massa. Maecenas aliquet odio ligula, eget congue mauris volutpat vitae. Quisque vitae dictum ante. Morbi cursus mi vel volutpat finibus. In ac metus ac nisl tristique hendrerit. Phasellus dapibus ultricies feugiat. Etiam luctus varius pulvinar. Quisque vel massa dolor.
                            </p>

                    </div>

                    <div className="abilities__specialists-specialist section__specialists-specialist">

                            <div className="abilities__specialists-btn section__specialists-btn" >front-end</div>
                            <p className="abilities__specialists-description section__specialists-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                                Quisque at est massa. Maecenas aliquet odio ligula, eget congue mauris volutpat vitae. Quisque vitae dictum ante. Morbi cursus mi vel volutpat finibus. In ac metus ac nisl tristique hendrerit. Phasellus dapibus ultricies feugiat. Etiam luctus varius pulvinar. Quisque vel massa dolor.
                            </p>

                    </div>

                    <div className="abilities__specialists-specialist section__specialists-specialist">

                            <div className="abilities__specialists-btn section__specialists-btn" >back-end</div>
                            <p className="abilities__specialists-description section__specialists-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                                Quisque at est massa. Maecenas aliquet odio ligula, eget congue mauris volutpat vitae. Quisque vitae dictum ante. Morbi cursus mi vel volutpat finibus. In ac metus ac nisl tristique hendrerit. Phasellus dapibus ultricies feugiat. Etiam luctus varius pulvinar. Quisque vel massa dolor.
                            </p>

                    </div>

                </div>

            

            </div>

        </section>
     );
}
 
export default Abilities;