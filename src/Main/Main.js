import React,{useRef} from 'react';

import Sections from "./Sections/Sections";

import "./Main.scss";

const Main = () => {

    const mainRef  = useRef(null);

 
    return ( 

        <main className="main" ref={mainRef}>
            <Sections mainRef={mainRef}/>
        </main>
     );
}
 
export default Main;