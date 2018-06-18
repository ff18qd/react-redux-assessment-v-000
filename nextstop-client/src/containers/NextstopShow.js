import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./NextstopShow.css";

class NextstopShow extends Component {
   render() {
    const { match } = this.props
    // debugger
    return (
      
      <div>
        <h3>{this.props.nextstop.name}</h3>
        <img className="ShowImage" src={this.props.nextstop.img_url} />
        <div className="comments">

        </div>
       
        
      </div>
    
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const nextstop = state.nextstops.find(nextstop => nextstop.id == ownProps.match.params.nextstopId)
 
  if (nextstop) {
    return { nextstop }
  } else {
    return { nextstop: {} }
  }
  
}

export default connect(mapStateToProps)(NextstopShow);
