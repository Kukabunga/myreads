import React from 'react'
import './App.css'
import BookShelf from './components/BookShelf'
import MainHeader from './components/MainHeader'
import Features from './components/Features'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import MyReadsPage from './MyReadsPage'
import MainMenu from "./components/MainMenu"

class BooksApp extends React.Component {
  render() {
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
          <MyReadsPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
