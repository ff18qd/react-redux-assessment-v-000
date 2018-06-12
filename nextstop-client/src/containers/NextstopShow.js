import React, { Component } from 'react';
import { connect } from 'react-redux';

const API_URL = "http://ec2-18-218-177-216.us-east-2.compute.amazonaws.com:8081/api";
 
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
    //const addComment=this.state.comment;
    const newComment = Object.assign({}, {content: this.state.comment, likes: Math.floor(Math.random() * 100)})
    // console.log(addComment);
    this.setState({ 
      comments: [...this.state.comments, newComment],
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

    return this.state.comments.sort((a, b) => b.likes - a.likes).map((c,index) => 
        <p key={index}>{c.content} - {c.likes} likes</p>
      
     );
  }
  
  callApi = () => {
      console.log('a')
        // fetch("http://ec2-18-218-171-133.us-east-2.compute.amazonaws.com:8081/api/nextstops")
        fetch(`${API_URL}/nextstops`)
        .then(response => {
          console.log('b')
          return response.json()
          
        })
        .then(nextstops => console.log('c',nextstops))
        .catch(error => console.log('d', error));
        console.log('e')
        
        
        // a b c+stops e
        
        // a e b c+stops
   
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
        <button onClick={this.callApi}>Call Api</button>
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
