import React,{ useState , useEffect,ReactDOM } from 'react';

import "./About-me.scss";
import Section_title from '../../../Utilities/Section_title/Section_title';

const About_me = ({aboutMeRef}) => {

    const features = ['punktualny','precyzyjny','staranny','wydajny','szybki'];

    const [featureNumber,setFeatureNumber] = useState(0);

    const changeText = () => setFeatureNumber(prevState=>prevState===features.length-1?0:++prevState);

    useEffect(()=>{
        const interval = setInterval(changeText,300);

        return () => clearInterval(interval)
    },[]);

  
   /* const handleSpecialistMove = (e) =>{
        const letters = e.target.innerText.split("");

        letters.map(letter=>{
         
          const elements =  document.createElement('span')
            elements.innerText = letter
            console.log(elements)
               document.getElementById('one').innerHTML = `<span>${letter}</span>`
            
        })
    }
    */

   

    return ( 

        <section className="section about-me" ref={aboutMeRef} id="about-me">

            <div className="about-me__features">
                    <span className="about-me__features-feature">{features[featureNumber]}</span>
            </div>

            <div className="about-me__description section__description">

                <Section_title text="kim jestem"/> 

                <p className="about-me__description-text section__text">
                   Nazywam się Krzysztof,uczę się kodowania od półtora roku.Zaledwie od niedawna przyjmuję zlecenia jako freelancer,co nie oznacza ,że nie rozwijam się dalej po godzinach. 
                </p>           
            
                <div className="about-me__specialists">

                    <div className="about-me__specialists-specialist section__specialists-specialist">

                        <div className="about-me__specialists-btn section__specialists-btn" id="one" >Lorem ipsum</div>
                        <p className="about-me__specialists-description section__specialists-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                        </p>

                    </div>

                    <div className="about-me__specialists-specialist section__specialists-specialist">

                        <div className="about-me__specialists-btn section__specialists-btn" id="one" >Lorem ipsum</div>
                        <p className="about-me__specialists-description section__specialists-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue tellus convallis tortor pretium sagittis. 
                        </p>

                    </div>
                </div>
            </div>

        </section>

     );
}
 
export default About_me;