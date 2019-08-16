import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Signup extends Component {

    state = {
        email: "",
        password: "",
        errorMessage: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;

        axios({
            url: "/authentication/signup",
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
                errorMessage: "User already exists."
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
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <input type="text" name="password" onChange={this.handleChange} />
                    <button>Sign Up</button><br />
                </form>
                Already have an account? <Link to="/Login">Click Here</Link>
                <p>{this.state.errorMessage}</p>
            </div>
        );
    }
}
export default Signup;