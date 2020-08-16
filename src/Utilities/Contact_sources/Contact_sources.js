import React from 'react';
import { Link} from "react-router-dom";

import "./Contact_sources.scss";

const Contact_sources = () => {

    return ( 

        <div className="contact-sources">

                <Link className="fab fa-facebook-f contact-sources__source" to="#"/>
                <Link className="fas fa-phone-alt contact-sources__source" to="#"/>
                <Link className="fab fa-github contact-sources__source" to="#"/>
                <Link className="far fa-envelope contact-sources__source" to="#"/>

        </div>
     );
}
 
export default Contact_sources;