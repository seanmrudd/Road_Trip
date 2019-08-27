import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Container from "../../components/Container";
import { Animated } from "react-animated-css";


class Signup extends Component {

    state = {
        username: "",
        password: "",
        errorMessage: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        const { username, password } = this.state;

        axios({
            url: "/authentication/signup",
            method: "POST",
            data: {
                username,
                password
            }
        }).then((response) => {
            const isAuthenticated = response.data.isAuthenticated;
            const username = response.data.username;
            window.localStorage.setItem("isAuthenticated", isAuthenticated);
            window.localStorage.setItem("username", username);

            console.log(`Data: ${response}`)
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
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Container>
                        <h2>Sign Up</h2>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                            <span>&nbsp;</span>
                            <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                            <span>&nbsp;</span>
                            <button>Sign Up</button><br />
                        </form>
                        Already have an account? <Link to="/Login">Click Here</Link>
                        <p>{this.state.errorMessage}</p>
                    </Container>
                </div>
            </Animated>
        );
    }
}
export default Signup;