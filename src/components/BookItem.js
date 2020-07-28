
import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import { NavLink } from 'react-router-dom';

const BookItem = ({book}) => {
    const theme = useContext(BookContext);
    return (
        <div style={theme.dark}>
            <NavLink to={`/full/${book.id}`}>{book.title}</NavLink>
            <div>ID: {book.id}</div>
            <div>Title: {book.title}</div>
            {/* <div>Author: {book.author}</div>
            <div>Description: {book.description}</div>
            <div>Published: {book.published}</div> */}
        </div>
    )
}

export default BookItem