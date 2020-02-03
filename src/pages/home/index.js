import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            phone: '',
            email: '',
            Fonction: '',
            city:''
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Maltem Academy - Giveaway
                            "
                            
                        />
                        <TextField
                            hintText="Votre réponse"
                            floatingLabelText="Nom et Prénom"
                            onChange={(event, newValue) => this.setState({ first_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Votre réponse"
                            type="phone"
                            floatingLabelText="télephone"
                            onChange={(event, newValue) => this.setState({ phone: newValue })}
                        />
                     
                        <br />
                        <TextField
                            hintText="Votre réponse"
                            type="email"
                            floatingLabelText="Adresse e-mail"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <TextField
                            type="Fonction"
                            hintText="Votre réponse"
                            floatingLabelText="Fonction"
                            onChange={(event, newValue) => this.setState({ Fonction: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Votre réponse"
                            floatingLabelText="ville"
                            onChange={(event, newValue) => this.setState({ city: newValue })}
                        />
                                                <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;