"use strict";

const createElement = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <h1 onClick={() => this.setState({ liked: true })}>
        <p>Hello World</p>
      </h1>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(
  <div>
    <LikeButton />
    <LikeButton />
    <LikeButton />
    <LikeButton />
    <LikeButton />
    <LikeButton />

    <h2>Hello Paraguay </h2>
  </div>,
  domContainer
);
