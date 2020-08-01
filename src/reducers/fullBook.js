export default function fullBook(state = {
    bookStore: [],
    selectedBook: {}
}, action) {
    /*if (action.type === "ONE_GET_ONE") {
        return state.filter(book => book.id === action.id);
    } else */
    if (action.type === "ONE_ADD_BOOK") {
        return {
            ...state,             
            bookStore: [...state.bookStore, action.payload]            
        }
    } else if (action.type === "ONE_GET_BOOK") {
        const itemList = state.bookStore.filter(book => book.id === action.id);
        return {
            ...state,
            selectedBook: itemList[0] || null
        }
    }

    
    /* else if (action.type === "ONE_UPDATE_BOOK") {
        return state.map((book) => book.id === action.id ? {
            ...book,
            title: action.data.title,
            author: action.data.author,
            description: action.data.description,
            published: action.data.published
        } : book)
    } else if(action.type === 'ONE_DELETE_BOOK') {
        return state.filter(book => book.id !== action.id);
    }*/
    return state;
}