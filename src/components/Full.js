
import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import { NavLink } from 'react-router-dom';

export const Full = (props) => {
    const theme = useContext(BookContext);
    // const dispatch = useDispatch();
    

    // useEffect(() => {
    //     dispatch(actions.getById())
    // }, [])

    return (
        <div style={theme.dark}>
            <div>ID: {props.match.params.id}</div>
            {/* <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Description: {book.description}</div>
            <div>Published: {book.published}</div> */}
        </div>
    )
}

export default Full