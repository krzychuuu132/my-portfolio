import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import "./styles/style.scss";
import "./styles/global_styles.scss"

import Header from "./Header/Header";
import Article from './Article/Article';
import Main from "./Main/Main";

const App = () => {
  return (
    <div className="App">
        <Router>
           <Header/>
           <Article />
           <Main />
        </Router>
         
    </div>
  );
}

export default App;
