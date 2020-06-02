// src/containers/book-list.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() { // -> bookitem
        return this.props.books.map( book => {
            return ( //Booklist 배열 -> 반복처리
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>  
            )
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

//연결 작업 Method
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

// 액션 연결
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(BookList);