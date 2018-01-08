import React from 'react';
import { Component } from "react"
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string
    }
    render() {
        return (
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="">
                        <div className="book" style={{ backgroundImage: `url(${this.props.image})` }}></div>
                    </div>
                    <div className="book__heading">{this.props.title}</div>
                    <div className="book__authors">{this.props.author}</div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <a href="#" className="btn__card">Current Reading</a>
                            <a href="#" className="btn__card">Want to Read</a>
                            <a href="#" className="btn__card">Read</a>

                        </div>
                        <div className="margin-top-30">
                            <a href="#" className="btn-text btn-text--white">Description</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;
