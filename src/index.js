import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

/* 
ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker(); 

-because I want more than one Card, I will rewrite the same code as above, as follows: */

ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker(); 