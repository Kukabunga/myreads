import React, { Component } from "react"
import PropTypes from 'prop-types'
import Book from './Book'
import DescriptionPopup from './DescriptionPopup'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array,
        type: PropTypes.string,
        onMoveTo: PropTypes.func
    }
    state = {
        showDescription: false,
        book: {}
    }

    onShowDescription = (e, book) => {
        e.preventDefault();
        this.setState({ book: book, showDescription: true })
    }

    onClose = (e) => {
        e.preventDefault();
        this.setState({showDescription: false, book: {}})
    }

    render() {
        const infos = this.props.books.filter(book => book.shelf === this.props.type)
        return (
            <div>
                <div className="row grid-wrapper">
                    {
                        infos.map(info => {
                            return <Book key={info.id}
                                onMoveTo={this.props.onMoveTo}
                                info={info}
                                onShowDescription={this.onShowDescription} />
                        })
                    }
                </div>
                {this.state.showDescription && <DescriptionPopup 
                    title={this.state.book.title} 
                    description={this.state.book.description}
                    onClose={this.onClose} />}
            </div>
        );
    }
}


export default BookList;