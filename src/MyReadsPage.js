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
        BooksAPI.getAll().then((books) => {this.setState({books})});
    }

    onMoveTo = (e, action, bookid) => {
        e.preventDefault();
        switch(action) {
            case Actions.CURRENTLY_READING: 
                console.log(action, bookid);
                break;
            case Actions.WANT_TO_READ:
                console.log(action, bookid);
                break;
            case Actions.READ:
                console.log(action, bookid);
                break;
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
                    onMoveTo={this.onMoveTo}/>
                <BookShelf 
                    books={this.state.books} 
                    type={ShelfType.WANT_TO_READ}
                    headerTitle="Want to read" 
                    styleColor="bookshelf--blue"
                    onMoveTo={this.onMoveTo}/>
                <BookShelf 
                    books={this.state.books} 
                    type={ShelfType.READ}
                    headerTitle="Read" 
                    styleColor="bookshelf--orange"
                    onMoveTo={this.onMoveTo}/>
                <Footer />
            </div>
        );
    }
}

export default MyReadsPage;