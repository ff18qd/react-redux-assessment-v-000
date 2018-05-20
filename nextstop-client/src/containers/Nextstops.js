import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => { 
  return { nextstops: state.nextstops };
};
 
export default connect(mapStateToProps)(Nextstops);
    
// export default Nextstops;
