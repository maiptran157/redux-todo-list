import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';

class SingleItem extends Component {
    componentDidMount() {
        console.log('Item ID:', this.props.match.params.itemId);
        this.props.getSingleItem(this.props.match.params.itemId);
    }
    render() {
        console.log("Single Item:", this.props.item)
        const { title, details } = this.props.item;
        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <h3>Title: {title}</h3>
                <h4>Details: {details}</h4>
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
    getSingleItem: getSingleItem
})(SingleItem)