import axios from 'axios';

const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}
export const createBook = (book) => (dispatch) => {
    axios.post(`${url}/create`, book).then((response) => {
        dispatch(addBook(response.data));
    })
}

export const getBooksSuccess = (books) => {
    return {
        type: 'GET_ALL',
        payload: books
    }
}
export const getAllBooks = () => (dispatch) => {
    axios.get(`${url}`).then((response) => {
        dispatch(getBooksSuccess(response.data));
    })
}
