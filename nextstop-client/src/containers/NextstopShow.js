import React from 'react';
import { connect } from 'react-redux';
 
const NextstopShow = props => {
  return (
    <div>
      <h3>Show Component!</h3>
    </div>
  );
}
 
 
const mapStateToProps = (state, ownProps) => {
  return {
    nextstopId: ownProps.match.params.nextstopId
  }
}
 
export default connect(mapStateToProps)(NextstopShow);
