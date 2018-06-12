// import React from 'react';
// import { connect } from 'react-redux';
// import NextstopsList from '../components/NextstopsList';
// import NextstopCard from '../components/NextstopCard';
 
// const NextstopsPage = ({ nextstops }) => 
//   <div>
//     <NextstopsList nextstops={nextstops} />
//   </div>;
 
// const mapStateToProps = (state) => {
//   return {
//     nextstops: state.nextstops
//   };
// }
 
// export default connect(mapStateToProps)(NextstopsPage);

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NextstopsList from '../components/NextstopsList';

 
// const NextstopsPage = ({ match, nextstops }) => 
class NextstopsPage extends Component {
  
  render() {
    const {match, nextstops} = this.props
    
    return (
      <div>
        <NextstopsList nextstops={nextstops} />
        <Route exact path={match.url} render={() => <h3>Please select a Nextstop from the list.</h3>}/>
      </div>
    )}
}
 
const mapStateToProps = (state) => {
  return {
    nextstops: state.nextstops
  };
}
 
export default connect(mapStateToProps)(NextstopsPage);
