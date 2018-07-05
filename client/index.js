import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from './reducers/combinedReducers.js';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

const store = createStore(
    reducers,
    applyMiddleware(thunk, logger));

render(
    <Provider store ={store}>     
    <App />
    </Provider>,
    document.getElementById("root")
    
)
