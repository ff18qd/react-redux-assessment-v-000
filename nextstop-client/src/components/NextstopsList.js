import React from 'react';
import { Link } from 'react-router-dom';
import "./NextstopsList.css";
 
const NextstopsList = ({ nextstops }) => {
  const renderNextstops = nextstops.map(nextstop => 
     <Link className="btn" key={nextstop.id} to={`/nextstops/${nextstop.id}`}>{nextstop.name}</Link>
  );
 
  return (
    <div>
      {renderNextstops}
    </div>
  );
};
 
export default NextstopsList;

