import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {
    static propTypes = {
        headerTitle: PropTypes.string.isRequired,
        styleColor: PropTypes.string,
        books: PropTypes.array
    }
    render() {
        return (
            <div className={`bookshelf ${this.props.styleColor}`}>
                <h2 className="bookshelf-title">{this.props.headerTitle}</h2>
                <BookList books={this.props.books} />
            </div>
        )
    }
}

export default BookShelf;