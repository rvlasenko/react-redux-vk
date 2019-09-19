import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
        this.props.getPhotos(year);
    };

    render() {
        const { year, photos, isLoading } = this.props;
        return (
            <div className="ib page">
                <div>
                    <button className="btn" onClick={this.onBtnClick}>
                        2019
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        2018
                    </button>{' '}
                    <button className="btn" onClick={this.onBtnClick}>
                        2017
                    </button>
                </div>
                <h3>{year} год</h3>

                {isLoading ? (
                    <p>Загрузка</p>
                ) : (
                    <p>У тебя {photos.length} фото.</p>
                )}
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setYear: PropTypes.func.isRequired,
    getPhotos: PropTypes.func.isRequired,
};
