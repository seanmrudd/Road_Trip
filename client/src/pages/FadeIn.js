import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import Flag from "../assets/images/download.jpg";

// const styles = {
//     style: {
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: "200px",
//         height: "auto"
//     }
// }
class FadeIn extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeState();
        }, 1000);
    };

    changeState = () =>{
        this.setState({
            redirect: true
        })
        // alert("hi")
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to = "login" />
            )
        }

        return (
            <div>
                <h1>I'm the fade in page.</h1>
            </div>
        );
    }
}
export default FadeIn;