// let's go! 
import React from 'react';//we need entire package to build app
import {render} from 'react-dom';//when you only one of method
// import StorePicker from './components/StorePicker';
import Router from './components/Router';
// import App from './components/App';
import "./css/style.css";


render(<Router/>, document.querySelector('#main'));