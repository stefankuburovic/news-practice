import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Card from '../../components/Card/Card';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './CardContainer.scss';

const CardContainer = ({ onClick, data, loading, error }) => {
    return (
        <div className="card-container">
            {loading ? (
                <ReactLoading
                    type="spin"
                    className="loading"
                    color="gray"
                    height={200}
                    width={200}
                />
            ) : error ? (
                <ErrorMessage />
            ) : (
                data !== undefined &&
                data.articles.map((value, key) => {
                    return <Card key={key} {...value} onClick={onClick} />;
                })
            )}
        </div>
    );
};

CardContainer.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
    onClick: PropTypes.func,
    country: PropTypes.string,
    status: PropTypes.string,
};
export default CardContainer;
