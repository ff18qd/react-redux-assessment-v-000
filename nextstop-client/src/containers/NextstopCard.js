import React, { Component } from 'react';
import './Nextstops.css';


// const NextstopCard = ({nextstop})=> (
//     <div key={nextstop.id} className="NextstopCard">
//         <h3>{nextstop.name}</h3>
//         <img className="NextstopImage" src={nextstop.img_url} alt={nextstop.name} />
//         <p>Budget: ${nextstop.budget}</p>
//         <button>Like</button>
//         <p>Likes: {nextstop.like}</p>
//         <button>Disike</button>
//         <p>DisLikes: {nextstop.dislike}</p>
//         <div>
//             <button type="button" value="delete" onClick={this.deleteCard}>Delete</button>
//         </div>
//     </div>
//     );



class NextstopCard extends Component {
    
    
    render() {
        return (
            <div key={this.props.nextstop.id} className="NextstopCard">
                <h3>{this.props.nextstop.name}</h3>
                <img className="NextstopImage" src={this.props.nextstop.img_url} alt={this.props.nextstop.name} />
                <p>Budget: ${this.props.nextstop.budget}</p>
                <button>Like</button>
                <p>Likes: {this.props.nextstop.like}</p>
                <button>Disike</button>
                <p>DisLikes: {this.props.nextstop.dislike}</p>
                <div>
                    <button type="button" value="delete" onClick={this.deleteCard}>Delete</button>
                </div>
            </div>
        )}
}



export default NextstopCard;