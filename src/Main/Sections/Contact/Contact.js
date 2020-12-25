import React,{ useState , useRef } from 'react';
import gsap from 'gsap';
import { useForm } from "react-hook-form";

import Section_title from '../../../Utilities/Section_title/Section_title';

import "./Contact.scss";
import Section_btn from '../../../Utilities/Section_btn/Section_btn';

const Contact = ({contactRef}) => {

    const [activeForm,setActiveForm] = useState(false);

    const contactWrapperRef = useRef(null);

    const { register, handleSubmit, watch, errors } = useForm();

    const handleFormClick = () => {

        setActiveForm(prevState=>!prevState);

        gsap.fromTo(contactWrapperRef.current,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.4})

    }


  
    const onSubmit = (data) =>{
        console.log(data)
    }

    return ( 

        <section className="section contact" id="contact" >

            <div className="wrapper" ref={contactRef}>

            <div className={activeForm?"contact__wrapper contact__wrapper--active":"contact__wrapper"} ref={contactWrapperRef}>

             {  !activeForm ?<> <div className="contact__wrapper-content">

                    <Section_title text="skontaktuj się"/>

                    <h3 className="contact__title section__title">Zainteresowany? Skontanktuj się ze mną !</h3>

                    <p className="contact__text section__text">Szukasz takiej osoby jak ja? Wyślij do mnie wiadomość !</p>

                </div></>:(

                    <div className="contact__wrapper-content">

                            <Section_title text="skontaktuj się"/>

                            <h2 className="contact__title section__title">Zainteresowany? Skontanktuj się ze mną !</h2>   

                            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="contact__form-inputs">

                                    <input type="text" className="contact__form-input" name="name_surname" placeholder="imię i nazwisko" ref={register({required:true})}/>

                                    <input type="email" className="contact__form-input" name="email" placeholder="adres email" ref={register({required:true})}/>

                                    <input type="text" className="contact__form-input" name="telephone" placeholder="numer telefonu" ref={register({required:true})}/>

                                    <input type="text" className="contact__form-input" name="thema" placeholder="temat" ref={register({required:true})}/>
                               
                               </div>
                               
                               <textarea className="contact__form-textarea" placeholder="twoja wiadomość" ></textarea>

                               <Section_btn title="wyślij" type="submit" />

                            </form>

                            <button className="contact__btn-exit" onClick={handleFormClick}><span className="fas fa-times contact__btn-exit-icon"></span></button>

                    </div>

                ) 
                
                }

                <button className="contact__btn" onClick={handleFormClick}><span className="fas fa-arrow-right contact__btn-icon"></span></button>

            </div>

            <div className="contact__work">

                <Section_title text="kontakt"/>

                <h2 className="contact__title section__title">Współpracuj ze mną !</h2>

            </div>

           </div>
        </section>

     );
}
 
export default Contact;