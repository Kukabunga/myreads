import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchSection from './components/SearchSection'
import Footer from './components/Footer'
import * as BooksAPI from './BooksAPI'
import * as Actions from './components/Actions'
import * as ShelfType from './components/ShelfType'
import AddNewBookPopup from './components/AddNewBookPopup'


class SearchPage extends Component {
    static propTypes = {
        booksInLibrary: PropTypes.array,
        onMoveTo: PropTypes.func
    }
    state = {
        books: [],
        searchStarted: false,
        showAddBookPopup: false
    }
    
    onFindBooks = (e) => {
        const query = e.target.value;
        if (query == "") {
            this.setState({ books: [], searchStarted: false, showAddBookPopup: false })
            return
        }

        this.setState({ ...this.state, searchStarted: true, nothingWasFound: false })
        const libBooks = this.props.booksInLibrary;
        BooksAPI.search(
            query.trim()).then((books) => {
                if (!books.error) {
                    let newBooks = books.map(c => {
                        const b = libBooks.filter(b => b.id === c.id)
                        if (b.length > 0) {
                            return { ...c, shelf: b[0].shelf }
                        }
                        return c
                    })
                    this.setState({
                        books: books.error === undefined ? newBooks : [],
                        searchStarted: false,
                        nothingWasFound: books.error !== undefined
                    })
                } else {
                    this.setState({ books: [], searchStarted: false, nothingWasFound: true })
                }
            }).catch((e) => {
                this.setState({ ...this.state, nothingWasFound: true, searchStarted: false })
            });
    }
    onMoveTo = (action, newBook) => {
        this.props.onMoveTo(action, newBook).then(() => {
            this.setState({ ...this.state, showAddBookPopup: true })
        })
    }

    onClose = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, showAddBookPopup: false })
    }

    render() {
        return (
            <div>
                <SearchSection
                    books={this.state.books}
                    onFindBooks={this.onFindBooks}
                    searchStarted={this.state.searchStarted}
                    nothingWasFound={this.state.nothingWasFound}
                    onMoveTo={this.onMoveTo} />
                {this.state.showAddBookPopup && <AddNewBookPopup onClose={this.onClose} />}
                <Footer />
            </div>
        )
    }
}
export default SearchPage;