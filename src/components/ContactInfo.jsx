import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import submitContactInfo from '../actions/submitContactInfo';
import Snackbar from 'material-ui/Snackbar';

const style = {
    margin: '20px'
};


export default class ContactInfo extends Component {
    constructor(props) {

        super(props);

        this.state = {
            name: '',
            email: '',
            open: false
        }

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.submit = this.submit.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    setName(event) {
        this.setState({ name: event.target.value });
    };

    setEmail(event) {
        this.setState({ email: event.target.value });
    };

    submit() {
        submitContactInfo(this.state.name, this.state.email).then((response) => {
            if (response.status === 200) {
                this.handleTouchTap()
                this.setState({ name: '', email: '' });
            }
        });
    };

    handleTouchTap() {
        this.setState({
            open: true
        });
    };

    handleRequestClose() {
        this.setState({
          open: false,
        });
      };

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email);
    };

    disabled() {
        const { email, name } = this.state;
        return name.length > 0 && this.validateEmail(email);
    };

    renderEmailWarning() {
        const { email } = this.state;
        if (email.length > 0 && !this.validateEmail(email)) {
            return (
                <h4> Please input a valid email address </h4>
            )
        }
    };


    render() {
        return (
            <div className="contact-info-container">
                <TextField hintText="Enter your new contacts' name." value={this.state.name} floatingLabelText="Name" onChange={this.setName} />
                <TextField hintText="Enter your new contacts' email." value={this.state.email} floatingLabelText="Email" onChange={this.setEmail} />
                {this.renderEmailWarning()}
                <RaisedButton disabled={!this.disabled()} label="Submit" secondary={true} onClick={this.submit} style={style}></RaisedButton>
                <Snackbar
                    open={this.state.open}
                    message="You submitted successfully!"
                    autoHideDuration={3000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )

    }
}

