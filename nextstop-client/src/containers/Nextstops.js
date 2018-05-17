import React from 'react';

const Nextstops = (props) => (
    <div>
        <h1>Nextstops</h1>
        { props.nextstops.map(n => <h3>{n.name}</h3>)}
    </div>
)
    
export default Nextstops;