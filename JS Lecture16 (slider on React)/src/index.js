import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import list from './dbJson/list.json';
import Slider from "./components/slider.js";

const timeIntervalImages1 = 2900;
const timeIntervalImages2 = 1700;

const images1 = list.img1.map(e => e.src);
const description1 = list.img1.map(e => e.description);
const images2 = list.img2.map(e => e.src);
const description2 = list.img2.map(e => e.description);

ReactDOM.render(
    <div>
        <App/>
        <Slider images={images1} description = {description1} timeInterval={timeIntervalImages1}/>
        <Slider images={images2} description = {description2} timeInterval={timeIntervalImages2}/>
    </div>,
    document.getElementById('root'));
serviceWorker.unregister();