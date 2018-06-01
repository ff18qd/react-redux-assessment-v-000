import React, { Component } from 'react';

// const About = () => {
//   return (
//     <div>
//       <h1>This is an app for people who love travelling</h1>
//     </div>
  
//   )};

class About extends Component {
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
    return (
      <div>
        <h1>This is an app for people who love travelling</h1>
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
  


export default About;