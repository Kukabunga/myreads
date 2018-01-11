import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import Footer from './components/Footer'
import * as Actions from './components/Actions'
import * as ShelfType from './components/ShelfType'

class MyReadsPage extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => { this.setState({ books }) });
    }

    reAssignShelf = (book, newShelf) => {
        const index = this.state.books.indexOf(book)
        this.setState({ books: 
            Object.values({ ...this.state.books, [index]: { ...this.state.books[index], shelf: newShelf } }) 
        })
    }

    onMoveTo = (e, action, bookid) => {
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
    render() {
        return (
            <div>
                <BookShelf
                    books={this.state.books}
                    type={ShelfType.CURRENTLY_READING}
                    headerTitle="Current Reading"
                    styleColor="bookshelf--green"
                    onMoveTo={this.onMoveTo} />
                <BookShelf
                    books={this.state.books}
                    type={ShelfType.WANT_TO_READ}
                    headerTitle="Want to read"
                    styleColor="bookshelf--blue"
                    onMoveTo={this.onMoveTo} />
                <BookShelf
                    books={this.state.books}
                    type={ShelfType.READ}
                    headerTitle="Read"
                    styleColor="bookshelf--orange"
                    onMoveTo={this.onMoveTo} />
                <Footer />
            </div>
        );
    }
}

export default MyReadsPage;