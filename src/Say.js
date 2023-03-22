//say.js

import {useState} from "react";
const Say = () => {
    const [message, setMessage] = useState('');
    //message는 멤버 변수, setMessage는 message값을 바꾸는 함수
    const onClickEnter = () => setMessage("안녕하세요");
    //message가 "안녕하세요"로 변경

    const onClickLever = () => setMessage("안녕히가세요");
    //message가 "안녕히가세요"로 변경

    const [color,setColor] = useState("black");
    //color에 "black"이 저장

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLever}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:"red"}} onClick = {()=>setColor("red")}> 
            {/* onClick = {()=>setColor("red")}은 빨간색 버튼을 눌렀을 때 color값을 "red"로 변경 */}
                빨간색
            </button>
            <button style={{color:"green"}} onClick = {()=>setColor("green")}>
                초록색
            </button>
            <button style={{color:"blue"}} onClick = {()=>setColor("blue")}>
                파란색
            </button>
        </div>
    )
}
export default Say;