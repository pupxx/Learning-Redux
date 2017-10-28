import React,  { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
    listOfBooks(){
        return this.props.books.map((el, i)=>{
            return <li key={i}>{el.title}</li>
        })
    }

    render(){
        return (
            <ul>
                {this.listOfBooks()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    books: state.books
}

export default connect(mapStateToProps)(BookList)