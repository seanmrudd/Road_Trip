import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email: "",
        password: "",
        errorMessage: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;

        axios({
            url: "/authentication/signin",
            method: "POST",
            data: {
                email,
                password
            }
        }).then((response) => {
            console.log(`Data: ${response.data}`)
            if (response.data) {
                this.props.history.push("/Menu")
            } else this.setState({
                errorMessage: "Please provide an email and password."
            })
        }).catch((error) => {
            console.log(error)
            this.setState({
                errorMessage: "Email or password is invalid."
            })
        });
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <input type="text" name="password" onChange={this.handleChange} />
                    <button>Login</button><br />
                </form>
                Need to make an account? <Link to="/SignUp">Click Here</Link>
                <p>{this.state.errorMessage}</p>
            </div>
        );
    }
}
export default Login;