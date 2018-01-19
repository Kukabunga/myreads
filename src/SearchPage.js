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
        if (e.which === 13 || e.keyCode === 13) {
            const query = e.target.value;
            if (query) {
                this.setState({ ...this.state, searchStarted: true, nothingWasFound: false })
                BooksAPI.search(
                    query.trim()).then((books) => {
                        const newBooks = books.map(c => {
                            const i = this.props.booksInLibrary.indexOf[c]
                            if (i != -1) {
                                return {...c, shelf: this.props.booksInLibrary[i].shelf}
                            }
                        })
                        this.setState({
                            books: newBooks.error === undefined ? books : [],
                            searchStarted: false,
                            nothingWasFound: books.error !== undefined
                        })
                    }).catch((e) => {
                        this.setState({ ...this.state, nothingWasFound: true })
                    });
            }
        }
    }
    onAddBook = (action, newBook) => {
        this.props.onMoveTo(action, newBook).then(() => {
            this.setState({...this.state, showAddBookPopup: true})
        })
    } 

    onClose = (e) => {
        e.preventDefault();
        this.setState({...this.state, showAddBookPopup: false})
    }

    render() {
        return (
            <div>
                <SearchSection
                    books={this.state.books}
                    onFindBooks={this.onFindBooks}
                    searchStarted={this.state.searchStarted}
                    nothingWasFound={this.state.nothingWasFound}
                    onAddBook={this.onAddBook} />
                    {this.state.showAddBookPopup && <AddNewBookPopup onClose={this.onClose} />}
                <Footer />
            </div>
        )
    }
}
export default SearchPage;