import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus(); //input 박스가 깜빡거리는 효과
  };
  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}
export default RefSample;
