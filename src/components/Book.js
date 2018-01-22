import React from 'react';
import { Component } from "react"
import PropTypes from 'prop-types'
import * as Actions from './Actions'
import * as ShelfType from './ShelfType'


const BookLink = ({ title, onMoveTo, type, shelfType, action }) => (
    <a href="#" onClick={(e) => onMoveTo(e, {action})} className={type === shelfType ? 'btn__card disabled' : 'btn__card'}>
        {type === shelfType ? <i className="ion-ios-checkmark-empty"></i> : null}
        {title}</a>
)

class Book extends Component {
    static propTypes = {
        info: PropTypes.object.isRequired,
        onMoveTo: PropTypes.func,
        onShowDescription: PropTypes.func
    }

    onMoveTo = (e, action) => {
        e.preventDefault();
        this.props.onMoveTo(action, this.props.info)
    }

    render() {
        const { info, onShowDescription } = this.props;
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
                    <div className="card__cta">
                        <div className="card__price-box">
                            <BookLink title='Currently Reading' 
                                onMoveTo={this.onMoveTo} 
                                type={ShelfType.CURRENTLY_READING}
                                shelfType={info.shelf}
                                action={Actions.CURRENTLY_READING}/>
                            <BookLink title='Want to Read' 
                                onMoveTo={this.onMoveTo} 
                                type={ShelfType.WANT_TO_READ}
                                shelfType={info.shelf}
                                action={Actions.WANT_TO_READ}/>
                            <BookLink title='Read' 
                                onMoveTo={this.onMoveTo} 
                                type={ShelfType.READ}
                                shelfType={info.shelf}
                                action={Actions.READ}/>
                        </div>
                        <div className="margin-top-30">
                            <a href="#" onClick={(e) => onShowDescription(e, info)} className="btn-text btn-text--white">Description</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;
