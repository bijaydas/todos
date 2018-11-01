import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/master.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

const ROOT = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, ROOT
);
