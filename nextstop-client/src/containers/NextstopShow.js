import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class NextstopShow extends Component {
   constructor(props) {
    super(props)
    this.state={
      comments: [],
      comment: ''
    }
  }
  handleCommentSubmit = (e) => {
    e.preventDefault();
    const addComment=this.state.comment;
    console.log(addComment);
    this.setState({ 
      comments: [...this.state.comments, addComment],
      comment: ''
    })
    // this.setState({
    //     comments.concat(addComment);
    // });
  }
  handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
          comment: e.target.value
    });
  }
  
  renderComments() {
     return this.state.comments.map((c,index) => 
        <p key={index}>{c}</p>
      
     );
  }
  
  render() {
    const { match } = this.props
    // debugger
    return (
      
      <div>
        <h3>{this.props.nextstop.name}</h3>
        <div className="comments">
          
          {this.renderComments()}
          
         
        </div>
        <form onSubmit={this.handleCommentSubmit}>
          <label>Comment</label>
          <textarea 
            onChange={this.handleOnChange}
            value={this.state.comment}
            placeholder="Input comment here...">
          </textarea>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const nextstop = state.nextstops.find(nextstop => nextstop.id == ownProps.match.params.nextstopId)
 
  if (nextstop) {
    return { nextstop }
  } else {
    return { nextstop: {} }
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     nextstopId: ownProps.match.params.nextstopId
//   }
// }
 
export default connect(mapStateToProps)(NextstopShow);
