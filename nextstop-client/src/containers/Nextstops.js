import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Nextstops.css';
import { getNextstops, deleteNextstop, likeNextstop} from '../actions/nextstops';
import NextstopCard from './NextstopCard';//need to change path
// import NextstopCard from '../components/NextstopCard';
import NextstopForm from './NextstopForm';


class Nextstops extends Component {
    
    handleOnDelete = (event) => {
        event.preventDefault();
        const nextstopId=event.target.value;
        console.log(nextstopId);
        this.props.deleteNextstop(nextstopId);
    }
    
    handleOnLike = (event) => {
        event.preventDefault();
        // get id of the Nextstop being clicked
        const nextstopId=parseInt(event.target.value);
        //find the Nextstop by id and increase like by 1
        var theNextstop = this.props.nextstops.find(n => n.id === nextstopId);
        var incLike = ++theNextstop.like;
        incLike = Object.assign({}, theNextstop, {like: incLike})
        
        console.log(nextstopId);
        console.log(incLike);
        
        // this.props.likeNextstop(nextstopId, updateLike);
    }
    
    componentDidMount() {
        // this.props.dispatch({
        //     type:"GET_NEXTSTOPS_SUCCESS",
        //     nextstops: [{name:"Yosamite National Park", budget: 800, img_url: "https://cdn.unifiedcommerce.com/content/product/large/628136609470.jpg"}]
        // })
        this.props.getNextstops();
    }
        
    render() {
        return (
            <div className="NextstopContainer">
                <h1>Nextstops</h1>
                { this.props.nextstops.map((nextstop,i) => {
                    return <NextstopCard key={i} index={i} nextstop={nextstop} handleOnDelete={this.handleOnDelete} handleOnLike={this.handleOnLike}/>
                    
                    })
                    
                }
                <NextstopForm />
            </div>
        )}
}

const mapStateToProps = (state) => { 
  return { nextstops: state.nextstops };
};
 
export default connect(mapStateToProps, { getNextstops, deleteNextstop, likeNextstop })(Nextstops);
    
