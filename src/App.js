import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
    render() {
        const { name, age } = this.props.user;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <p className="App-intro">
                    Здесь будут мои самые залайканые фото
                </p>
                <p>
                    Меня зовут: {name}, мне {age}
                </p>
            </div>
        );
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
    };
};

// в компонент App
export default connect(mapStateToProps)(App);
