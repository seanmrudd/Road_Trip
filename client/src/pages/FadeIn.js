import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Container from "../components/Container";
import { Animated } from "react-animated-css";
import Flag from "../assets/images/download.png";

class FadeIn extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeState();
        }, 3000);
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
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Container>
                        <div className="text-center">
                            <h1>A Shrudder Production</h1>
                            <br />
                            <img src={Flag} alt="Flag"></img>
                        </div>
                    </Container>
                </div>
            </Animated>
        );
    }
}
export default FadeIn;