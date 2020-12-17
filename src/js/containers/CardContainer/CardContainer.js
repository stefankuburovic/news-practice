import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import Card from '../../components/Card/Card';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './CardContainer.scss';

const CardContainer = ({ onClick, status, data }) => {
    let content;
    switch (status) {
        case 'loading':
            content = (
                <ReactLoading
                    type="spin"
                    className="loading"
                    color="gray"
                    height={200}
                    width={200}
                />
            );
            break;
        case 'error':
            content = <ErrorMessage />;
            break;
        case 'success':
            {
                content =
                    data !== undefined &&
                    data.articles.map((value, key) => {
                        return <Card key={key} {...value} onClick={onClick} />;
                    });
            }
            break;
        default:
            return <div>Nothing is loaded</div>;
    }
    return <div className="card-container">{content}</div>;
};

CardContainer.propTypes = {
    country: PropTypes.string,
    status: PropTypes.string,
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default CardContainer;
