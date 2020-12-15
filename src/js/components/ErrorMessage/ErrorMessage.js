import React from 'react';
import { FormattedMessage } from 'react-intl';

import './ErrorMessage.scss';

const ErrorMessage = () => {
    return (
        <div className="error-container">
            <FormattedMessage
                id="error.message"
                defaultMessage="{text}"
                values={{ text: 'Error Message' }}
            />
        </div>
    );
};

export default ErrorMessage;
