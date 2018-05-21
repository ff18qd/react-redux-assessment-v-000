import React, { Component} from 'react';
import { connect } from 'react-redux';


class NextstopForm extends Component {
    
    render() {
        // debugger
        // const { name, budget, img_url, like, dislike } = this.props.nextstopFormData;
        // const { name, budget, img_url, like, dislike } = this.state;
        return (
            <div>
            Add a New Destination
                <form>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                       
                    />
                    <label htmlFor="budget">Budget:</label>
                    <input
                        type="text"
                        name="budget"
                       
                    />
                    <label htmlFor="img_url">Img URL:</label>
                    <input
                        type="text"
                        name="img_url"
                       
                    />
                </form>
            </div>
            

        )}
}


const mapStateToProps = state => {
    return {
        nextstopFormData: state.nextstopFormData
    };
}

export default connect(mapStateToProps)(NextstopForm);