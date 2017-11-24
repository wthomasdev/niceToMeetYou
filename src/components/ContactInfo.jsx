import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: '20px'
};


export default class ContactInfo extends Component {
    constructor(props) {

        super(props)

        this.state = {
            name: '',
            email: ''
        }

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.submit = this.submit.bind(this);
    }

    setName(event) {
        this.setState({name: event.target.value});
    }

    setEmail(event) {
        this.setState({email: event.target.value});
    }

    submit() {
        console.log(`this is what i'm submitting ${this.state.name}, and ${this.state.email}`)
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }

    disabled() {
        const { email, name } = this.state
        return name.length > 0 && this.validateEmail(email)
    }

    renderEmailWarning() {
        const {email} = this.state
        if (email.length > 0 && !this.validateEmail(email)) {
            return (
                <h4> Please input a valid email address </h4>
            )
        }
    }


    render() {
        return (
            <div className="contact-info-container">
                <TextField hintText="Enter your new contacts' name." value={this.state.name} floatingLabelText="Name" onChange={this.setName}/>
                <TextField hintText="Enter your new contacts' email." floatingLabelText="Email" onChange={this.setEmail} />
                {this.renderEmailWarning()}
                <RaisedButton disabled={!this.disabled()} label="Submit" secondary={true} onClick={this.submit} style={style}></RaisedButton>
            </div>
        )

    }
}

