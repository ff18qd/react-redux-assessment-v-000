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
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NextstopsList from '../components/NextstopsList';
import NextstopShow from './NextstopShow';
 
// const NextstopsPage = ({ match, nextstops }) => 
class NextstopsPage extends Component {
  
  render() {
    const {match, nextstops} = this.props
    // const childrenShowDiv = React.Children.map(this.props.children, child => {
    //   return (
    //     <Route path={`${match.url}/:nextstopId`} component={NextstopShow}/>
    //   );
    // });
    
    return (
      <div>
        <NextstopsList nextstops={nextstops} />
        <Switch>
          <Route path={`${match.url}/:nextstopId`} component={NextstopShow}/>
          <Route exact path={match.url} render={() => (
            <h3>Please select a Nextstop from the list.</h3>
          )}/>
        </Switch>
      </div>
      
    )
  }
}
 
const mapStateToProps = (state) => {
  return {
    nextstops: state.nextstops
  };
}
 
export default connect(mapStateToProps)(NextstopsPage);

// 