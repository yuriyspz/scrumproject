import React, { Component, useState, useEffect, useContext } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../actions';
import BookItem from './BookItem';
import { BookContext } from './BookContext';

const BooksList = () => {
    const books = useSelector(state => state.book);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(actions.getAllBooks())
    }, [])

    return (
        <>
        {books.map(book => {
            return (
                <BookItem book={book} key={book.id}/>
            )
        })}
        </>
    )
}

export default BooksList;
