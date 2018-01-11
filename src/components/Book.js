import React from 'react';
import { Component } from "react"
import PropTypes from 'prop-types'
import * as Actions from './Actions'

class Book extends Component {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onMoveTo: PropTypes.func
    }
    render() {
        const { info, onMoveTo } = this.props;
        return (
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="">
                        <div className="book" style={{ backgroundImage: `url(${info.imageLinks.thumbnail})` }}></div>
                    </div>
                    <div className="book__heading">{info.title}</div>
                    <div className="book__authors">{info.authors ? info.authors.join(", ") : ""}</div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <a className="remove" href="#">&times;</a>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <a href="#" onClick={(e) => onMoveTo(e, Actions.CURRENTLY_READING, info.id)} className="btn__card">Current Reading</a>
                            <a href="#" onClick={(e) => onMoveTo(e, Actions.WANT_TO_READ, info.id)} className="btn__card">Want to Read</a>
                            <a href="#" onClick={(e) => onMoveTo(e, Actions.READ, info.id)} className="btn__card">Read</a>
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
