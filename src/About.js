import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class About extends Component {


    processing() {
        console.log('proces');
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>About {this.props.match.params.id}</h1>
                <button onClick={this.processing.bind(this)}>Route</button>
                <Link to='/'>Go Home</Link>
            </div>
        );
    }
}

export default About;
