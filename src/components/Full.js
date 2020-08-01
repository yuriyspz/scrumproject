
import React, { useContext, useEffect } from 'react';
import { BookContext } from './BookContext';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

export const Full = (props) => {
    const theme = useContext(BookContext);
    const {id} = props.match.params;
//    const bookStore = useSelector(state => state.fullBook.bookStore);
    const selectedBook = useSelector(state => state.fullBook.selectedBook);

//    const books = useSelector(state => state.fullBook);
    const selBook = bookStore.filter(book => book.id === id);
    const dispatch = useDispatch();
    if (selectedBook) {
        
    } else {
        dispatch(actions.getFullBook(id));
    }
    
    
/*    useEffect(() => {
        dispatch(actions.getAsyncFullBook(id))
    }, [])
*/
    const book = books[0];
    console.log(book);
    const res = book ? 
        <>
            <div>ID: {id}</div>
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Description: {book.description}</div>
            <div>Published: {book.published}</div>
        </> : 'Loading';

    return (
        <div style={theme.dark}>
            {res}
        </div>
    )
}

export default Full