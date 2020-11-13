import React,{useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import "./styles/style.scss";
import "./styles/global_styles.scss"

import Header from "./Header/Header";
import Article from './Article/Article';
import Main from "./Main/Main";

import NavigationContext from './context/NavigationContext';

const App = () => {

  const [activeMenu,setActiveMenu] = useState(false);


  const toogleActiveMenu = (active) => setActiveMenu(active);


  return (
    <div className="App">
        <Router>

        <NavigationContext.Provider value={{
        activeMenu,
        toogleActiveMenu
    }}>
           <Header/>

        </NavigationContext.Provider>

           <Article />
           <Main />
        </Router>
         
    </div>
  );
}

export default App;
