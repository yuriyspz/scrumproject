import React, { Component, useState } from 'react';
import {useDispatch} from 'react-redux';

import * as actions from '../actions';

const AddBook = () => {
    const [book, setBook] = useState({
        "title": "",
        "author":"",
        "description":"",
        "published": 0
    });

    const dispatch = useDispatch();


    const handleChange = (e) => {
        setBook({
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //this.props.addBook(book);
        dispatch(actions.createBook(book));
    }

//    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    Title: <input name="title" type="text" value={book.title} onChange={handleChange}/>
                    Author: <input name="author" type="text" value={book.author} onChange={handleChange}/>
                    Description: <input name="description" type="text" value={book.description} onChange={handleChange}/>
                    Published: <input name="published" type="text" value={book.published} onChange={handleChange}/>
                    <input type="submit" />
                </form>                
            </div>
        )
  //  }
}
/*
const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(actions.createBook(book))
    }
}
*/
//export default connect(null, mapDispatchToProps)(AddBook)
export default AddBook;