import axios from 'axios';
import {call, put, takeEvery, all} from 'redux-saga/effects';

const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;
const getAllBooks = () => {
    return axios.get(url).then(response => {
        return response.data;
    })
}

const createNewBook = (book) => {
    return axios.post(`${url}/create`, book).then((response) => {
        return response.data;
    })
}

export function* watchGetAllBooks() {
    yield takeEvery('GET_ALLBOOKS_ACTION', getAllBooksWorker);
}

export function* watchCreateBook() {
    yield takeEvery('CREATE_BOOK_ACTION', createBookWorker);
}

function* createBookWorker({payload}){  
    const book = yield call(() => createNewBook(payload));
//    yield getAllBooksWorker();
    yield put({
        type: 'ADD_BOOK',
        payload: book
    })
}


function* getAllBooksWorker(){    
    const books = yield call(getAllBooks);
    yield put({
        type: 'GET_ALL',
        payload: books
    })
}

export default function* rootSaga() {
    yield all([watchGetAllBooks(), watchCreateBook()])
}