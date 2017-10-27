import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {

   listOfBooks =  this.props.books.map((el, i)=>{
        return <li key={i}>{el.title}</li>
    })

    render() {
        return (
            <div>
                {listOfBooks}
            </div>
        )
    }
}

mapStateToProps(state){
    return state.books
}