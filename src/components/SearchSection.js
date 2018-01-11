import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import Loader from './Loader'


class SearchSection extends Component {
    static propTypes = {
        onFindBooks: PropTypes.func,
        books: PropTypes.object,
        searchStarted: PropTypes.bool,
        nothingWasFound: PropTypes.bool
    }
    render() {
        const { books, onFindBooks, searchStarted,nothingWasFound } = this.props;
        const someBooks = books && books.length > 0
        return (
            <div className="empty-section">
                <div className="row padding-top-30">
                    <h2 className="empy-section__header header--white">Would you like to find new books?</h2>
                    <input type="search" className="search margin-top-30" onKeyPress={onFindBooks} />
                </div>
                {nothingWasFound && <div className="row"><span className="nothing-found"><i className="ion-sad"></i><span>Nothing was found</span></span></div>}
                {searchStarted && <Loader />}
                {
                    someBooks && <div className="row">
                        <BookShelf books={books} headerTitle="Search result:" />
                    </div>
                }
            </div>
        )
    }
};
export default SearchSection;