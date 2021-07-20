import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/scrollbar.css';
import Home from './components/Home/index.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

