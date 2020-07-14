import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import * as serviceWorker from './serviceWorker';
import App from './views/App';
import whyDidYouRender from 'shared/utils/whyDidYouRender';
import './index.scss';

// whyDidYouRender();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
serviceWorker.register();
