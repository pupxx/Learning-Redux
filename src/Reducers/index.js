import { combineReducers } from 'redux';
import BookList from './reducer-books';

const rootReducer = combineReducers({
    books: BookList
})

export default rootReducer;