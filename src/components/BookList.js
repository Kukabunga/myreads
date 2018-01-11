import React, { Component } from "react"
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array,
        type: PropTypes.string,
        onMoveTo: PropTypes.func
    }

    render() {
        const infos = this.props.books.filter(book => book.shelf === this.props.type)
        return (
            <div>
                <div className="row grid-wrapper">
                    {
                        infos.map(info => {return <Book key={info.id} onMoveTo={this.props.onMoveTo} info={info}/>})
                    }
                </div>
            </div>
        );
    }
}


export default BookList;