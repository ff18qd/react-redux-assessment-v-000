import React, { Component } from 'react';
import './Nextstops.css';


const NextstopCard = ({index, nextstop, handleOnDelete, handleOnLike, handleOnDislike})=> (
    <div  className="NextstopCard">
        <h3>{nextstop.name}</h3>
        <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
        <p>Budget: ${nextstop.budget}</p>
        <button value={nextstop.id} onClick={(e) => handleOnLike(e)}>Like</button>
        <p>Likes: {nextstop.like}</p>
        <button value={nextstop.id} onClick={(e) => handleOnDislike(e)}>Disike</button>
        <p>DisLikes: {nextstop.dislike}</p>
        <div>
            <button type="button" value={nextstop.id} onClick={(e) => handleOnDelete(e)}>Delete</button>
        </div>
    </div>
    );

export default NextstopCard;



