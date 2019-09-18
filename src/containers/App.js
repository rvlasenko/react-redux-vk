import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import './App.css';

class App extends Component {
    render() {
        const { user, page } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <User name={user.name} age={user.age} />
                <Page photos={page.photos} year={page.year} />
            </div>
        );
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page,
    };
};

// в компонент App
export default connect(mapStateToProps)(App);
