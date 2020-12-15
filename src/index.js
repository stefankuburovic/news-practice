import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './js/components/App/App';
import { IntlProviderWrapper } from './js/hoc/IntlContext';

ReactDOM.render(
    <React.StrictMode>
        <IntlProviderWrapper>
            <App />
        </IntlProviderWrapper>
    </React.StrictMode>,
    document.getElementById('root'),
);
