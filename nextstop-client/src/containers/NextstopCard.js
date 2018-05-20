import React from 'react';
import './Nextstops.css';


const NextstopCard = ({nextstop})=> (
    <div key={nextstop.id} className="NextstopCard">
        <h3>{nextstop.name}</h3>
        <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
        <p>Budget: ${nextstop.budget}</p>
        <p>Like: {nextstop.like}</p>
        <button>Like</button>
        <p>DisLike: {nextstop.dislike}</p>
        <button>Disike</button>
    </div>
    );

export default NextstopCard;