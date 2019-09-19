import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { setYear } from '../actions/PageActions';
import './App.css';

class App extends Component {
    render() {
        const { user, page, setYearAction } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <User name={user.name} age={user.age} />
                <Page
                    photos={page.photos}
                    year={page.year}
                    setYear={setYearAction}
                />
            </div>
        );
    }
}

// теперь в свойствах (props) этого компонента есть user и page
const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page,
    };
};

// теперь в свойствах (props) этого компонента есть функции setYearAction
const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year)),
    };
};

// в компонент App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
