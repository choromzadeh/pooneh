import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.js';
import "font-awesome/css/font-awesome.css";
import NavBar from './components/navbar';
// import './CSS/index.css';
import SearchContainer from './components/SearchContainer';
import TestBootstrap from './components/testBootstrap';
import SelectArea from './components/dropdown';
import SelectSearch from 'react-select-search';





render(<SearchContainer/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// ........................................................................................................................

