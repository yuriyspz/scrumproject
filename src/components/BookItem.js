import React from 'react';

const BookItem = ({book}) => {
    return (
        <div>
            <div>ID: {book.id}</div>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Description: {book.description}</div>
            <div>Published: {book.published}</div>
        </div>
    )
}

export default BookItem