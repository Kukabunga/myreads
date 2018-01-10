import React from 'react'
import { Route } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import MainMenu from "./components/MainMenu"
import HomePage from './HomePage';
import MyReadsPage from './MyReadsPage'
import SearchPage from './SearchPage'

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
        <Route exact path="/search" render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp
