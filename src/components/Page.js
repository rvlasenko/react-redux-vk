import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
        this.props.getPhotos(year);
    };

    renderButtons = () => {
        return (
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
        );
    };

    renderPhotos = () => {
        const { photos } = this.props;

        return photos.map(photo => (
            <a
                href={photo.link}
                key={photo.id}
                target="_blank"
                without
                rel="noopener noreferrer"
            >
                <div className="img-wrap">
                    <img src={photo.images.thumbnail.url} alt="" />
                    <span>{photo.likes.count} ❤</span>
                </div>
            </a>
        ));
    };

    render() {
        const { year, photos, isLoading } = this.props;

        return (
            <div className="ib page">
                <h3>{year} год</h3>
                {this.renderButtons()}

                {isLoading ? (
                    <p className="paragraph">Загрузка</p>
                ) : (
                    <p className="paragraph">У тебя {photos.length} фото.</p>
                )}

                <div>{photos.length ? this.renderPhotos() : ''}</div>
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
