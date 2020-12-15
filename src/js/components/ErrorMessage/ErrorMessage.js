import React from 'react';
import PropTypes from 'prop-types';
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

ErrorMessage.propTypes = {
    status: PropTypes.string,
};
export default ErrorMessage;
