import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListData } from '../actions';

class List extends Component {
    componentDidMount() {
        this.props.getListData();
    }
    render() {
        console.log("List Props:", this.props);
        const { list } = this.props;
        const listElements = list.map(item => {
            return <li key={item._id} className="collection-item">{item.title}</li>
        })
        return (
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, {
    getListData: getListData
})(List);