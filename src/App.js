import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import "./styles/style.scss";

import Header from "./Header/Header";
import Article from './Article/Article';

const App = () => {
  return (
    <div className="App">
        <Router>
           <Header/>
           <Article />
        </Router>
         
    </div>
  );
}

export default App;
