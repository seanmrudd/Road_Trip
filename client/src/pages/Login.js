import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Container from "../components/Container";
import { Animated } from "react-animated-css";


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
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Container>
                        <h2>Login</h2>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                            <span>&nbsp;</span>
                            <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                            <span>&nbsp;</span>
                            <button>Login</button><br />
                        </form>
                        Need to make an account? <Link to="/SignUp">Click Here</Link>
                        <p>{this.state.errorMessage}</p>
                    </Container>
                </div>
            </Animated>
        );
    }
}
export default Login;