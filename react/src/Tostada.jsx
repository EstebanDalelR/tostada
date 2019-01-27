import React, { Component } from 'react';

class Tostada extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section style={{
                backgroundColor: "#1f1f1f",
                color: "#f3f3f3",
                padding: "0.75rem",
                marginBottom: " 0.6875rem",
                fontFamily: "sans-serif",
                bottom: 0,
                position: "fixed",
                opacity: 1
            }}>
                {this.props.toastText}
            </section>
        );
    }
}

export default Tostada;