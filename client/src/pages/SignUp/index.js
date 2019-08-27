import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Container from "../../components/Container";
import { Animated } from "react-animated-css";
import Row from "../../components/Row";


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

    togglePasswordHidden = (event) => {
        event.preventDefault();
        this.setState({
            hidden: !this.state.hidden,
            passwordButton: !this.state.passwordButton
        })
    }

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
                            <Row>
                                <input className="inputField" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                                <input className="inputField" type={this.state.hidden ? "password" : "text"} name="password" placeholder="Password" onChange={this.handleChange} />
                            </Row>
                            <Row>
                                <button onClick={this.togglePasswordHidden}>{this.state.passwordButton ? "Show Password" : "Hide Password"}</button>
                                <button>Login</button>
                            </Row>
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