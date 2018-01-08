import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import MainHeader from './components/MainHeader'
import Features from './components/Features'
import Footer from './components/Footer'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Features />
                <Footer />
            </div>
        );
    }
}
export default HomePage;