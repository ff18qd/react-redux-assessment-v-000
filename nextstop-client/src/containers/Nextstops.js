import React, { Component } from 'react';
import './Nextstops.css';
import NextstopCard from './NextstopCard';
import NextstopForm from './NextstopForm';
class Nextstops extends Component {
    
    render() {
        return (
            <div className="NextstopContainer">
                <h1>Nextstops</h1>
                { this.props.nextstops.map(nextstop =><NextstopCard nextstop={nextstop}/>)}
                <NextstopForm />
            </div>
        )}
}

    
export default Nextstops;
