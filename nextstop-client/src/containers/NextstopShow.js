// import React from 'react';
// import { connect } from 'react-redux';
 
// const NextstopShow = ({ nextstop }) =>
//   <div>
//     <h3>Name: {nextstop.name}</h3>
//   </div>
 
// const mapStateToProps = (state, ownProps) => {
//   const nextstop = state.nextstops.find(nextstop => nextstop.id === ownProps.match.params.nextstopId)
 
//   if (nextstop) {
//     return { nextstop }
//   } else {
//     return { nextstop: {} }
//   }
// }
 
// export default connect(mapStateToProps)(NextstopShow);

import React from 'react';
 
const NextstopShow = props => {
  return (
    <div>
      <h3>Show Component!</h3>
    </div>
  );
}
 
export default NextstopShow;