// // import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
// import Counter from './Counter';

// class App extends Component{
//   render(){
//     return <Counter/>
//   }

//   // return <MyComponent name = "react"/>; // props에 보낼 값을 넣어줌, 안 적으면 default 값
//   // 지정된 name의 자료형이 아니라면 console에 오류
//   // name = "react"를 명시하면 MyComponrnt에 name 속성이 전달됨
//   // 명시하지 않은 "리액트" 문자열은 MyComponent의 children에 전달됨
//   // 여기 사이에 아무것도 안 들어가면 기본 값 저장함
//   // children 값을 저 사이에 적으면 children 값에 들어감
// };
import { Component } from "react";
import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollBottom()}>맨 밑으로</button>
      </div>
    );
  }
}
export default App;
