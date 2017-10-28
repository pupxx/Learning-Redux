import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    listOfBooks() {
        return this.props.books.map((el, i) => {
            return <li
                onClick={(e) => { this.props.selectBook(el) }}
                key={i}>{el.title}</li>
        })
    }

    render() {
        return (
            <ul>
                {this.listOfBooks()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}


// Anthing returned form this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote bookList form a component to conainer, it needs to know about this new dispatch method, selectBook.  make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)