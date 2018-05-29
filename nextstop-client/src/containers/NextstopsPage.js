import React from 'react';
import { connect } from 'react-redux';
import NextstopsList from '../components/NextstopsList';
 
const NextstopsPage = ({ nextstops }) => 
  <div>
    <NextstopsList nextstops={nextstops} />
  </div>;
 
const mapStateToProps = (state) => {
  return {
    nextstops: state.nextstops
  };
}
 
export default connect(mapStateToProps)(NextstopsPage);