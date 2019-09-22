import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos, setYear } from '../actions/PageActions';
import { handleLogin, handleSuccess, handleError } from '../actions/UserActions';
import './App.css';

class App extends Component {
    render() {
        const {
            user,
            page,
            setYearAction,
            getPhotosAction,
            handleLoginAction,
            handleSuccessAction,
            handleErrorAction,
        } = this.props;

        return (
            <div className="App">
                <Page
                    photos={page.photos}
                    year={page.year}
                    isLoading={page.isLoading}
                    setYear={setYearAction}
                    getPhotos={getPhotosAction}
                />
                <User
                    name={user.name}
                    errorMessage={user.error}
                    isLoading={user.isLoading}
                    handleLogin={handleLoginAction}
                    handleSuccess={handleSuccessAction}
                    handleError={handleErrorAction}
                />
            </div>
        );
    }
}

// теперь в свойствах (props) этого компонента есть user и page
const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
    };
};

// теперь в свойствах (props) этого компонента есть функции setYearAction
const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year)),
        getPhotosAction: year => dispatch(getPhotos(year)),
        handleLoginAction: () => dispatch(handleLogin()),
        handleSuccessAction: token => dispatch(handleSuccess(token)),
        handleErrorAction: error => dispatch(handleError(error)),
    };
};

// в компонент App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
