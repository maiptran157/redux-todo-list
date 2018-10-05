import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addListItem } from '../actions';
import { connect } from 'react-redux';

class AddItem extends Component {
    renderInput(props) {
        // console.log('Render Input Arguments:', arguments);
        //arguments is a key word in JS
        //Tell you everything that gets passed into a function.
        //Do not work inside a fat arrow function

        // console.log('Render Input Arguments:', props);

        const { input, label, meta: { touched, error } } = props;

        // this.renderInput({input, label, meta: { touched, error }}) //look at Scott's video
        //https://www.youtube.com/watch?v=pGvOYMpYBBU&feature=youtu.be

        return (
            <div className="row">
                <div className="s12">
                    <label>{label}</label>
                    <input {...input} type="text" autoComplete="off" />
                    <p className="red-text text-darken-2">{touched && error}</p>
                </div>
            </div>
        )
    }

    saveItem = async (values) => {
        console.log("Form Values:", values);
        await this.props.addListItem(values);
        this.props.history.push('/');
    }

    render() {
        // console.log('Add Item Props:', this.props);
        const { handleSubmit } = this.props; //handleSubmit is a built in method
        return (<div>
            <h1 className="center">Add Item</h1>
            <div className="row">
                <div className="col-s8 offset-2">
                    <form action="" onSubmit={handleSubmit(this.saveItem)}>
                        <Field name="title" component={this.renderInput} label="Title" />
                        <Field name="details" component={this.renderInput} label="Details" />
                        <div className="row"></div>
                        <div className="s12 right-align">
                            <button className="btn blue-grey darken-1">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
        )
    }
}

function validate(values) {
    const { title, details } = values;
    const errors = {};

    if (!title) {
        errors.title = 'Please give your item a title';
    }

    if (!details) {
        errors.details = 'Please give your item some details';
    }

    return errors;
}


AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect(null, {
    addListItem: addListItem
})(AddItem);