import React from 'react';
import { Link } from 'react-router-dom';
 
const NextstopsList = ({ nextstops }) => {
  const renderNextstops = nextstops.map(nextstop => 
     <Link key={nextstop.id} to={`/nextstops/${nextstop.id}`}>{nextstop.name}</Link>
  );
 
  return (
    <div>
      {renderNextstops}
    </div>
  );
};
 
export default NextstopsList;

