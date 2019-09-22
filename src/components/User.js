import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
    componentDidMount() {
        const { handleSuccess, handleError } = this.props;
        const matches = window.location.hash.match(/=(.*)/);
        const params = new URLSearchParams(window.location.search);
        const errorDesc = params.get('error_description');

        if (matches) {
            handleSuccess(matches[1]);
        } else if (window.location.search.includes('error')) {
            handleError(errorDesc);
        }
    }
    renderTemplate = () => {
        const { name, isLoading, handleLogin, errorMessage } = this.props;

        if (isLoading) {
            return <p>Загружаю...</p>;
        }

        if (name) {
            return <p>Привет, {name}</p>;
        } else {
            return (
                <div>
                    <p style={{ marginBottom: 10, color: 'red' }}>
                        {errorMessage ? errorMessage : ''}
                    </p>
                    <button className="btn" onClick={handleLogin}>
                        Войти
                    </button>
                </div>
            );
        }
    };

    render() {
        return <div className="ib user">{this.renderTemplate()}</div>;
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleSuccess: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
