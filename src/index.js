import React, { Component } from 'react';
import ReactDOM from "react-dom";
import BookList from "./containers/book_list";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        )
    }
}

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
</Provider>, document.querySelector('#root'))