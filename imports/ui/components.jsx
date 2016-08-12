// reactJS Component 1
import React, { Component } from 'react';

export { LikeButton, Post, ShowImage }


class ShowImage extends Component {
    render() {
        return (<img src="2h27.svg" alt="No file" />);
    }
}


var Post = React.createClass({
  render() {
    return (
      <div className="post">
        <h1>Hello World!</h1>
        <p>Lorem ipsum</p>
      </div>
    )
  }
});

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
        <div>
            <Post />
            <div onClick={this.handleClick}>
            You {text} this. Click to toggle.
            </div>
        </div>
    );
  }
}
