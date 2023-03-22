import { Component } from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);

    // state 추가해도 결과는 똑같음
    state = {
        // state값 불러오기
        // this.state = {
            number: 0,
            fixedNum : 3
        // };
    }

    render() {
        const {number, fixedNum} = this.state; // state에 있는 number 값 조회
        return (
            <div>
                <h1> {number } </h1>
                <h2> 바뀌지 않는 값 : {fixedNum} </h2>
                <button
                        // onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다.
                        onClick={() => { 
                        this.setState(
                        { 
                        number: number + 1 
                        },
                        () => { 
                        console.log(＇방금 setState가 호출되었습니다.＇) 
                        console.log(this.state); 
                        }
                        );
                        }}
                        >
                        +1
                </button>
            </div>
        );
    }
}

export default Counter;