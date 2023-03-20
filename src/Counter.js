//Counter.js

import { Component } from "react";

class Counter extends Component{
    state= {
            number:0,
            fixedNumber : 0
        };
        //리액트 프레임워크에서 생성자를 실행하게끔 설계되어 있음
    render(){
        const {number, fixedNumber} = this.state; //state에 있는 값을 조회
        //number=0, fixedNumber=0이 저장
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 :{fixedNumber}</h2>
                <button
                onClick={()=>{
                    this.setState({number:number+1});
                    this.setState({number:this.state.number+1});
                    //setState 함수는 속성값을 변경한다.
                }}
                >
                    +1
                </button>
            </div>
        )
    }
}
export default Counter;