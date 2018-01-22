import React from 'react'
import { Route } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import MainMenu from "./components/MainMenu"
import HomePage from './HomePage';
import MyReadsPage from './MyReadsPage'
import SearchPage from './SearchPage'
import * as Actions from './components/Actions'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import * as ShelfType from './components/ShelfType'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
   this.onGetAll()
  }

  onGetAll = () => {
    BooksAPI.getAll().then((books) => { this.setState({ books }) });
  }

  onMoveTo = (action, newBook) => {
    if (!newBook || !action) {
      return
    }
    switch (action.action) {
      case Actions.CURRENTLY_READING:
        return this.reAssignShelf(newBook, ShelfType.CURRENTLY_READING)
      case Actions.WANT_TO_READ:
        return this.reAssignShelf(newBook, ShelfType.WANT_TO_READ)
      case Actions.READ:
        return this.reAssignShelf(newBook, ShelfType.READ)
      default: return;
    }
  }

  reAssignShelf = (book, newShelf) => {
    if (book && book.shelf === newShelf) return;
    const index = this.state.books.findIndex(b => b.id === book.id)
    if (index != -1) {
      return BooksAPI.update(book, newShelf).then((response) => {
        this.setState({
          books:
            Object.values({ ...this.state.books, [index]: { ...this.state.books[index], shelf: newShelf } })
        })
      });
    } else {
      return BooksAPI.update(book, newShelf).then(r => {
        this.setState({books: this.state.books.concat(book)})
      });
    }
  }
  render() {
    const { books
      , searchStarted
      , showAddBookPopup
      , query
    } = this.state;

    return (
      <div>
        <MainMenu />
        <Route exact path="/" render={() => (
          <div>
            <MainHeader />
            <HomePage />
          </div>
        )} />
        <Route exact path="/myreads" render={() => (
          <MyReadsPage
            books={books}
            onMoveTo={this.onMoveTo}
            onGetAll={this.onGetAll} />
        )} />
        <Route exact path="/search" render={() => (
          <SearchPage
            booksInLibrary={books}
            searchStarted={searchStarted}
            showAddBookPopup={showAddBookPopup}
            onMoveTo={this.onMoveTo} />
        )} />
      </div>
    )
  }
}

export default BooksApp
