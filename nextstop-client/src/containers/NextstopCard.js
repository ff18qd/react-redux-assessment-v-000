import React from 'react';
import './Nextstops.css';


const NextstopCard = ({nextstop})=> (
    <div key={nextstop.id} className="NextstopCard">
        <h3>{nextstop.name}</h3>
        <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
        <p>Budget: ${nextstop.budget}</p>
        <button>Like</button>
        <p>Likes: {nextstop.like}</p>
        <button>Disike</button>
        <p>DisLikes: {nextstop.dislike}</p>
    </div>
    );

export default NextstopCard;