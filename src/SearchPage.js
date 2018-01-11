import React, { Component } from 'react'
import SearchSection from './components/SearchSection'
import Footer from './components/Footer'
import * as BooksAPI from './BooksAPI'


class SearchPage extends Component {
    state = {
        books: [],
        searchStarted: false
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
    render() {
        return (
            <div>
                <SearchSection
                    books={this.state.books}
                    onFindBooks={this.onFindBooks}
                    searchStarted={this.state.searchStarted}
                    nothingWasFound={this.state.nothingWasFound} />
                <Footer />
            </div>
        )
    }
}
export default SearchPage;