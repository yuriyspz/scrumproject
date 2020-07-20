import React, { Component, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../actions';
import BookItem from './BookItem';

const BooksList = () => {
    const books = useSelector(state => state.book);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllBooks())
    })

    return (
        <>
        {books.map(book => {
            return (
                <BookItem book={book} />
            )
        })}
        </>
    )
}

export default BooksList