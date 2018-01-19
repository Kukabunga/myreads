import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from './components/BookShelf'
import Footer from './components/Footer'
import Filter from './components/Filter'
import * as ShelfType from './components/ShelfType'

class MyReadsPage extends Component {
    static propTypes = {
        books: PropTypes.array,
        onMoveTo: PropTypes.func,
        onGetAll: PropTypes.func
    }

    state = {
        query: ''
    }

    componentDidMount() {
        this.props.onGetAll();
    }

    onFilter = (query) => {
        this.setState({ query: query })
    }

    filterBooks = () => {
        const { books } = this.props;
        const { query } = this.state;
        let showingBooks = books;
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((book) => {
                let titleMatch
                let authorMatch
                if (book.title) {
                    titleMatch = match.test(book.title);
                }
                if (book.authors) {
                    authorMatch = match.test(book.authors.join(","))
                }
                return titleMatch || authorMatch;
            })
        }
        return showingBooks;
    }
    render() {
        let showingBooks = this.filterBooks();
        return (
            <div className="myreads">
                <BookShelf
                    books={showingBooks}
                    type={ShelfType.CURRENTLY_READING}
                    headerTitle="Current Reading"
                    styleColor="bookshelf--green"
                    onMoveTo={this.props.onMoveTo}
                    filter={<Filter onFilter={this.onFilter} />}
                />
                <BookShelf
                    books={showingBooks}
                    type={ShelfType.WANT_TO_READ}
                    headerTitle="Want to read"
                    styleColor="bookshelf--blue"
                    onMoveTo={this.props.onMoveTo}
                />
                <BookShelf
                    books={showingBooks}
                    type={ShelfType.READ}
                    headerTitle="Read"
                    styleColor="bookshelf--orange"
                    onMoveTo={this.props.onMoveTo}
                />
                <Footer />
            </div>
        );
    }
}

export default MyReadsPage;