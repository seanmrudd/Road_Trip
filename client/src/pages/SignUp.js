import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {

    state = {
        email: "",
        password: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        const {email, password} = this.state;

        axios({
            url: "/authentication/signup",
            method: "POST",
            data: {
                email,
                password
            }
        }).then((response) => {
            console.log(`Data: ${response.data}`)
        }).catch((error) => {
            console.log(error)
        });
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="email" onChange={this.handleChange}/>
                    <input type="text" name="password" onChange={this.handleChange}/>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}
export default Signup;