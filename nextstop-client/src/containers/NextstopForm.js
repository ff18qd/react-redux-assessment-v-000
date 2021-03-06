import React, { Component} from 'react';
import { connect } from 'react-redux';
import { updateNextstopFormData } from '../actions/nextstopForm';
import { createNextstop } from '../actions/nextstops';
import './NextstopForm.css';

class NextstopForm extends Component {
    handleOnChange = event => {
        const { name, value } = event.target;
        const currentNextstopFormData=Object.assign({},this.props.nextstopFormData,{
            [name]: value
        });
        this.props.updateNextstopFormData(currentNextstopFormData);
    }
    
    handleOnSubmit= event => {
        event.preventDefault();
        this.props.createNextstop(this.props.nextstopFormData)
    }
    
    render() {
        // debugger
        const { name, budget, img_url, like, dislike } = this.props.nextstopFormData;
        
        return (
            <div>
            
                <form onSubmit={this.handleOnSubmit}>
                    
                    <div>
                        <h3>Add a New Destination</h3>
                    </div>
                    <div>
                        <label className="col-25" htmlFor="name">Name:</label>
                    </div>
                    <div>
                        <input className="col-75"
                            type="text"
                            name="name"
                            onChange={this.handleOnChange}
                            value={ name }
                        />
                    </div>
                    <div>
                        <label className="col-25" htmlFor="budget">Budget:</label>
                    </div>
                    <div>
                        <input className="col-75"
                            type="text"
                            name="budget"
                            onChange={this.handleOnChange}
                            value={ budget }
                        />
                    </div>
                    <div>
                        <label className="col-25" htmlFor="img_url">Image URL:</label>
                    </div>
                    <div>
                        <input className="col-75"
                            type="text"
                            name="img_url"
                            onChange={this.handleOnChange}
                            value={ img_url }
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>

        )}
}


const mapStateToProps = state => {
    return {
        nextstopFormData: state.nextstopFormData
    };
}

export default connect(mapStateToProps, { updateNextstopFormData, createNextstop })(NextstopForm);