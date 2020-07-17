import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';
import {getAllBooks} from "../actions";

class BookList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <div>
                {this.props.books.map((book) => {
                    console.log(book)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.book
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => dispatch(getAllBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
