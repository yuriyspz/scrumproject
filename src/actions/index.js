import axios from 'axios';
const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book
    }
}

export const getAll = (booksList = []) => {
    return {
        type: 'GET_ALL',
        payload: booksList
    }
}

export const getAllBooks = () => (dispatch) => {
    axios.get(`${url}`).then((response) => {
        dispatch(getAll(response.data))
    }).catch((msg) => {
        throw new Error(msg);
    })
}


export const createBook = (book) => (dispatch) => {
    axios.post(`${url}/create`, book).then((response)=> {
        dispatch(addBook(response.data));
    })
}

export const addFullBook = (book) => {
    return {
        type: 'ONE_ADD_BOOK',
        payload: book
    }
}

export const getFullBook = (bookId) => {
    return {
        type: 'ONE_GET_BOOK',
        id: bookId
    }
}

export const getAsyncFullBook = (bookId) => (dispatch) => {
    axios.get(`${url}/${bookId}`).then((response) => {
        dispatch(addFullBook(response.data))
    }).catch((msg) => {
        throw new Error(msg);
    })
}
/*
export const updateFullBook = (book) => {
    return {
        type: 'ONE_UPDATE_BOOK',
        id: book.id,
        data: {...book}
    }
}

export const deleteFullBook = (bookId) => {
    return {
        type: 'ONE_DELETE_BOOK',
        id: bookId
    }
}
*/