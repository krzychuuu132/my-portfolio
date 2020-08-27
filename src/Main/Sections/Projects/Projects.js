import React from 'react';

import Section_title from '../../../Utilities/Section_title/Section_title';

import { ReactComponent as View_picture} from "../../../img/mobile-app.svg";

import "./Projects.scss";


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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend finibus vestibulum. Nam mattis massa in mauris tempor facilisis.
                </p>


            </div>

            <div className="projects__view">
                <View_picture/>
            </div>

        </div>
        </section>

     );

}
 
export default Projects;