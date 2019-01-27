import React, { Component } from 'react';

class Tostada extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <section>
                {this.props.toastText}
            </section>
        );
    }
}

export default Tostada;