import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import { getPhotos, setYear } from '../actions/PageActions';

class PageContainer extends Component {
    render() {
        const { user, page, setYearAction, getPhotosAction } = this.props;

        return (
            <Page
                userName={user.name}
                photos={page.photos}
                year={page.year}
                isLoading={page.isLoading}
                setYear={setYearAction}
                getPhotos={getPhotosAction}
            />
        );
    }
}

// теперь в свойствах (props) этого компонента есть user и page
const mapStateToProps = store => {
    return {
        page: store.page,
        user: store.user,
    };
};

// теперь в свойствах (props) этого компонента есть функции setYearAction
const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year)),
        getPhotosAction: year => dispatch(getPhotos(year)),
    };
};

// в компонент App
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer);
