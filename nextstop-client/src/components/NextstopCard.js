import React from 'react';
import '../containers/Nextstops.css';


const NextstopCard = ({index, nextstop, handleOnDelete, handleOnLike, handleOnDislike})=> (
    <div  className="NextstopCard">
        <h3>{nextstop.name}</h3>
        <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
        <p>Budget: ${nextstop.budget}</p>
        <div className="LikeDislike">
            <button value={nextstop.id} onClick={(e) => handleOnLike(e)} ><i class="fa fa-thumbs-o-up"></i>: {nextstop.like}</button>
        </div>
        <div className="LikeDislike">
            <button value={nextstop.id} onClick={(e) => handleOnDislike(e)} ><i class="fa fa-thumbs-o-down"></i>: {nextstop.dislike}</button>
        </div>
        <div>
            <button type="button" value={nextstop.id} onClick={(e) => handleOnDelete(e)}><i class="fa fa-close"></i> Delete</button>
        </div>
    </div>
    );

export default NextstopCard;