import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'
import { configureStore } from './app/store';
import { Provider } from 'react-redux';

const browserHistory = createHistory();

const store = configureStore(browserHistory);

ReactDOM.render(<Provider store={store} ><App history={browserHistory}/></Provider>, document.getElementById('root'));
registerServiceWorker();
