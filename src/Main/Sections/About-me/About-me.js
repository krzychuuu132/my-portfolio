import React,{ useState , useEffect } from 'react';

import "./About-me.scss";
import Section_title from '../../../Utilities/Section_title/Section_title';

const About_me = () => {

    const features = ['punktualny','precyzyjny','staranny','wydajny','szybki'];

    const [featureNumber,setFeatureNumber] = useState(0);

    const changeText = () => setFeatureNumber(prevState=>prevState===features.length-1?0:++prevState);

    useEffect(()=>{
        const interval = setInterval(changeText,300);

        return () => clearInterval(interval)
    },[]);

    

   

    return ( 

        <section className="sections about-me">

            <div className="about-me__features">
                    <h2 className="about-me__features-feature">{features[featureNumber]}</h2>
            </div>

            <div className="about-me__description">

                <Section_title text="kim jestem"/> 

                <p className="about-me__description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. Aliquam volutpat et arcu id sollicitudin. Pellentesque pretium sem tellus, in egestas tortor ultrices eu. Etiam nec finibus dui, non efficitur tellus.    
                </p>           
            
                <div className="about-me__specialists">

                    <div className="about-me__specialists-specialist">

                        <div className="about-me__specialists-btn">Lorem ipsum</div>
                        <p className="about-me__specialists-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                        </p>

                    </div>

                    <div className="about-me__specialists-specialist">

                        <div className="about-me__specialists-btn">Lorem ipsum</div>
                        <p className="about-me__specialists-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                        </p>

                    </div>
                </div>
            </div>

        </section>

     );
}
 
export default About_me;