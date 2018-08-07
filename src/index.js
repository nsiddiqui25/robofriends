import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

const store = createStore(searchRobots)
/* 
ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker(); 

-because I want more than one Card, I will rewrite the same code as above, as follows: */

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));
registerServiceWorker(); 