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

import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NextstopsList from '../components/NextstopsList';
import NextstopShow from './NextstopShow';
 
const NextstopsPage = ({ match, nextstops }) => 
  <div>
    <NextstopsList nextstops={nextstops} />
    
    <Route path={`${match.url}/:nextstopId`} component={NextstopShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a Nextstop from the list.</h3>
    )}/>
    
  </div>;
 
const mapStateToProps = (state) => {
  return {
    nextstops: state.nextstops
  };
}
 
export default connect(mapStateToProps)(NextstopsPage);