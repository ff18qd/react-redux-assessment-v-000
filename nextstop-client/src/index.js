import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
    // <Provider store={store}>
    //     <App />, 
    // </Provider>,
    <Provider store={store}>
        <App store={store}/>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
