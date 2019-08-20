import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Container from "../components/Container";

import Flag from "../assets/images/download.png";

class FadeIn extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeState();
        }, 1000);
    };

    changeState = () => {
        this.setState({
            redirect: true
        })
        // alert("hi")
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="login" />
            )
        }

        return (
            <div>
                <Container>
                    <img src={Flag} alt="Flag"></img>
                </Container>
            </div>
        );
    }
}
export default FadeIn;