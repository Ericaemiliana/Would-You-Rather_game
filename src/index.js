import React from 'react';
// I have look into these two projects online to get help on this projects. Tutors are not available most of the time. 
//https://github.com/sanjib/ReactND-Project-Would-You-Rather
//https://github.com/artpropp/react-would-you-rather
//https://github.com/QuadDamn/udacity-would-you-rather-project/tree/master/src/actions

import {render} from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

let store = createStore(reducer, middleware);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);