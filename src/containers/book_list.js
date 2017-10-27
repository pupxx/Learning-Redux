import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((el)=>{
            return <li key={el.title}>{el.title}</li>
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList)