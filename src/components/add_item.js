import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddItem extends Component {
    renderInput(props) {
        // console.log('Render Input Arguments:', arguments);
        //arguments is a key word in JS
        //Tell you everything that gets passed into a function.
        //Do not work inside a fat arrow function

        console.log('Render Input Arguments:', props);

        return (
            <div className="row">
                <div className="s12">
                    <label htmlFor="">{props.input.name}</label>
                    <input {...props.input} type="text" />
                </div>
            </div>
        )
    }

    saveItem = (values) => {
        console.log("Form Values:", values);
    }

    render() {
        console.log('Add Item Props:', this.props);
        const { handleSubmit } = this.props; //handleSubmit is a built in method
        return (<div>
            <h1 className="center">Add Item</h1>
            <div className="row">
                <div className="col-s8 offset-2">
                    <form action="" onSubmit={handleSubmit(this.saveItem)}>
                        <Field name="Title" component={this.renderInput} />
                        <Field name="Details" component={this.renderInput} />
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

export default reduxForm({
    form: 'add-item'
})(AddItem);