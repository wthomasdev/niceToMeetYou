import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


export default class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-container">
                <TextField hintText="Enter your new contacts' name." floatingLabelText="Name" />
                <TextField hintText="Enter your new contacts' email." floatingLabelText="Email" />
            </div>
        )

    }
}