import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {

    listOfBooks() {
        return this.props.books.map((el, i) => {
            return <li key={i}>{el.title}</li>
        })

    }



    render() {
        return (
            <div>
                {listOfBooks()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}


export default connect(mapStateToProps)(BookList)