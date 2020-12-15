import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './js/components/App/App';
import { IntlProviderWrapper } from './js/hoc/IntlContext';
import { Provider } from 'react-redux';
import store from './js/store/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlProviderWrapper>
                <App />
            </IntlProviderWrapper>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
