import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import MainHeader from './components/MainHeader'
import Features from './components/Features'
import Footer from './components/Footer'
import SearchSection from './components/SearchSection'
import Loader from './components/Loader'


class MyReadsPage extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        const books = BooksAPI.getAll();
        this.setState({ books })
    }
    render() {
        let section = null;
        if (this.state.books.length == 0) {
            section = <SearchSection />
        } else {
            section = <BookShelf />
        }
        return (
            <div>
                {/* {section} */}
                <BookShelf headerTitle="Current Reading" styleColor="bookshelf--green"/>
                <BookShelf headerTitle="Current Reading" styleColor="bookshelf--blue"/>
                <BookShelf headerTitle="Current Reading" styleColor="bookshelf--orange"/>
                <Footer />
            </div>
        );
    }
}

export default MyReadsPage;