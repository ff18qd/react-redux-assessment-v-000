import React from 'react';
import '../containers/Nextstops.css';


const NextstopCard = ({index, nextstop, handleOnDelete, handleOnLike, handleOnDislike})=> (
    <div  className="NextstopCard">
        <h3>{nextstop.name}</h3>
        <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
        <p>Budget: ${nextstop.budget}</p>
        <div className="LikeDislike">
            <button value={nextstop.id} onClick={(e) => handleOnLike(e)} style={{float: "left"}}>Like</button>
            <p>{nextstop.like}</p>
        </div>
        <div className="LikeDislike">
            <button value={nextstop.id} onClick={(e) => handleOnDislike(e)} style={{float: "left"}}>Disike</button>
            <p>{nextstop.dislike}</p>
        </div>
        <div>
            <button type="button" value={nextstop.id} onClick={(e) => handleOnDelete(e)}>Delete</button>
        </div>
    </div>
    );

export default NextstopCard;