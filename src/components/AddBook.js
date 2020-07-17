import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "",
            "author": "",
            "description": "",
            "published": 0
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Title: <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
                    Author: <input name="author" type="text" value={this.state.author} onChange={this.handleChange}/>
                    Description: <input name="description" type="text" value={this.state.description} onChange={this.handleChange}/>
                    Published: <input name="published" type="text" value={this.state.published} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(actions.createBook(book))
    }
}

export default connect(null, mapDispatchToProps)(AddBook)
