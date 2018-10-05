import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, clearSingleItem, toggleComplete } from '../actions';

const style = {
    fontWeight: 'bold'
}

class SingleItem extends Component {
    componentDidMount() {
        console.log('Item ID:', this.props.match.params.itemId);
        this.props.getSingleItem(this.props.match.params.itemId);
    }
    componentWillUnmount() {
        this.props.clearSingleItem();
    }
    render() {
        console.log("Single Item:", this.props.item)
        // const { title, details, complete, toggleComplete } = this.props.item;
        const { item, toggleComplete, match: { params } } = this.props;
        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <h3><span className="orange-text" style={style}>Title:</span> {item.title}</h3>
                <h4><span className="pink-text" style={style}>Details:</span> {item.details}</h4>
                <h4 className={`${item.complete ? 'green-text' : 'red-text'} darken-2`}>
                    {item.complete ? 'Item has been completed' : 'Item has NOT been completed'}
                </h4>
                <button onClick={() => toggleComplete(params.itemId)} className={`btn ${item.complete ? '#ffab40 orange accent-2' : '#00e676 green accent-3'}`}>
                    {item.complete ? 'Remove Complete Status' : 'Complete Item'}
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('State:', state);
    return {
        item: state.list.single
    };
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem,
    clearSingleItem: clearSingleItem,
    toggleComplete: toggleComplete
})(SingleItem)