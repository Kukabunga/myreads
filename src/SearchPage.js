import React, { Component } from 'react'
import SearchSection from './components/SearchSection'
import Footer from './components/Footer'
import * as BooksAPI from './BooksAPI'
import * as Actions from './components/Actions'
import * as ShelfType from './components/ShelfType'
import AddNewBookPopup from './components/AddNewBookPopup'


class SearchPage extends Component {
    state = {
        books: [],
        searchStarted: false,
        showAddBookPopup: false,
    }
    onFindBooks = (e) => {
        if (e.which === 13 || e.keyCode === 13) {
            const query = e.target.value;
            if (query) {
                this.setState({ ...this.state, searchStarted: true, nothingWasFound: false })
                BooksAPI.search(
                    query.trim()).then((books) => {
                        this.setState({
                            books: books.error === undefined ? books : [],
                            searchStarted: false,
                            nothingWasFound: books.error !== undefined
                        })
                    }).catch((e) => {
                        this.setState({ ...this.state, nothingWasFound: true })
                    });
            }
        }
    }
    reAssignShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then((response) => {
            this.setState({...this.state, showAddBookPopup: true})
        });
    }
    onAddBook = (e, action, bookid) => {
        e.preventDefault();
        const books = this.state.books.filter(book => book.id === bookid);
        if (books.length > 0) {
            switch (action) {
                case Actions.CURRENTLY_READING:
                    this.reAssignShelf(books[0], ShelfType.CURRENTLY_READING)
                    break;
                case Actions.WANT_TO_READ:
                    this.reAssignShelf(books[0], ShelfType.WANT_TO_READ)
                    break;
                case Actions.READ:
                    this.reAssignShelf(books[0], ShelfType.READ)
                    break;
                default: return;
            }
        }
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