import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin, handleSuccess, handleError } from '../actions/UserActions';

class UserContainer extends Component {
    render() {
        const {
            user,
            handleLoginAction,
            handleSuccessAction,
            handleErrorAction,
        } = this.props;

        return (
            <User
                name={user.name}
                errorMessage={user.error}
                isLoading={user.isLoading}
                handleLogin={handleLoginAction}
                handleSuccess={handleSuccessAction}
                handleError={handleErrorAction}
            />
        );
    }
}

// теперь в свойствах (props) этого компонента есть user и page
const mapStateToProps = store => {
    return {
        user: store.user,
    };
};

// теперь в свойствах (props) этого компонента есть функции setYearAction
const mapDispatchToProps = dispatch => {
    return {
        handleLoginAction: () => dispatch(handleLogin()),
        handleSuccessAction: token => dispatch(handleSuccess(token)),
        handleErrorAction: error => dispatch(handleError(error)),
    };
};

// в компонент App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);
