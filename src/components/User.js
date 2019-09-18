import React from 'react';
import PropTypes from 'prop-types';

export class User extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <p>
                    Привет, {name}, {age} лет!
                </p>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};
