import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import Loader from './Loader'

class BookShelf extends Component {
    static propTypes = {
        headerTitle: PropTypes.string.isRequired,
        styleColor: PropTypes.string,
        books: PropTypes.array,
        type: PropTypes.string.isRequired,
        onMoveTo: PropTypes.func
    }
    render() {
        const {books, type, onMoveTo} = this.props;
        let listOrLoader = null;
        if (books && books.length > 0) {
            listOrLoader = <BookList books={books} type={type} onMoveTo={onMoveTo}/>
        } else {
            listOrLoader = <Loader />
        }
        return (
            <div className={`bookshelf ${this.props.styleColor} bookshelf--min-height`}>
                <h2 className="bookshelf-title">{this.props.headerTitle}</h2>
                {listOrLoader}
            </div>
        )
    }
}

export default BookShelf;