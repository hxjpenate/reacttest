
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './router/index';
import * as serviceWorker from './utils/serviceWorker';
 
const mountNode = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    mountNode
);
serviceWorker.unregister();
