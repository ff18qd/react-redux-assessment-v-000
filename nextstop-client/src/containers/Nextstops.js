import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Nextstops.css';
import { getNextstops } from '../actions/nextstops';
import NextstopCard from './NextstopCard';//need to change path
// import NextstopCard from '../components/NextstopCard';
import NextstopForm from './NextstopForm';


class Nextstops extends Component {
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
                { this.props.nextstops.map(nextstop =><NextstopCard nextstop={nextstop}/>)}
                <NextstopForm />
            </div>
        )}
}

const mapStateToProps = (state) => { 
  return { nextstops: state.nextstops };
};
 
export default connect(mapStateToProps, { getNextstops })(Nextstops);
    
// export default Nextstops;
