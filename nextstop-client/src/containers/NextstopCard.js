import React, { Component } from 'react';
import './Nextstops.css';
// import { connect } from 'react-redux';
// import { deleteNextstop, likeNextstop } from '../actions/nextstops';


const NextstopCard = ({index, nextstop, handleOnDelete})=> (
    <div  className="NextstopCard">
        <h3>{nextstop.name}</h3>
        <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
        <p>Budget: ${nextstop.budget}</p>
        <button>Like</button>
        <p>Likes: {nextstop.like}</p>
        <button>Disike</button>
        <p>DisLikes: {nextstop.dislike}</p>
        <div>
            <button type="button" value={index} onClick={(e) => handleOnDelete(e)}>Delete</button>
        </div>
    </div>
    );

export default NextstopCard;


// class NextstopCard extends Component {
//     handleOnDelete = (event) => {
//         event.preventDefault();
//         const nextstopId=event.target.value;
//         console.log(nextstopId);
//         this.props.deleteNextstop(nextstopId)
//     }
    
//     handleOnLike = (event) => {
//         event.preventDefault();
//         const nextstopId=event.target.value;
//         const updateLike = ++this.props.nextstop.like;
//         console.log(updateLike);
//         this.props.likeNextstop(nextstopId, updateLike);
//     }
    
    
//     render() {
//         return (
//             <div key={this.props.nextstop.id} className="NextstopCard">
//                 <h3>{this.props.nextstop.name}</h3>
//                 <img className="NextstopImage" src={this.props.nextstop.img_url} alt={this.props.nextstop.name} />
//                 <p>Budget: ${this.props.nextstop.budget}</p>
//                 <button id='like' value={this.props.nextstop.like} onClick={this.handleOnLike}>Like</button>
//                 <p>Likes: {this.props.nextstop.like}</p>
//                 <button id='dislike' value={this.props.nextstop.dislike}>Disike</button>
//                 <p>DisLikes: {this.props.nextstop.dislike}</p>
//                 <div>
//                     <button type="button" value={this.props.nextstop.id} onClick={this.handleOnDelete}>Delete</button>
//                 </div>
//             </div>
//         )}
// }


// export default connect(null, { deleteNextstop, likeNextstop })(NextstopCard);
