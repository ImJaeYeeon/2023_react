import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>안녕하세요우 제 이름은 {name} 이여.<br/>
            나의 새롭고 멋진 컴포논트.<br/>
            chidren 값은 {children}.<br/>
            내가 좋아하는 숫자는 {favoriteNumber}
            </div>
        );
    }
}

// const MyComponent = ({name, favoriteNumber, children}) => {
//     // name과 children을 속성값으로 설정
//     // const {name, children} = props;
//     return(
//     <div>안녕하세요우 제 이름은 {name} 이여.<br/>
//     나의 새롭고 멋진 컴포논트.<br/>
//     chidren 값은 {children}.<br/>
//     내가 좋아하는 숫자는 {favoriteNumber}
//     </div>
//     )
// }

// // defalt 값
// // App.js에서 보낸 값이 없으면 default 값 적용
// MyComponent.defaultProps = {
//     name: '기본 이름',
// }

// MyComponent.prototype = {
//     name:PropTypes.string
//     // name은 문자열을 받을 수 있는 속성으로 지정
// }

// MyComponent.prototype = {
//     favoriteNumber:PropTypes.number.isRequired
//     // name은 정수형을 받을 수 있는 속성으로 지정
//     // isRequired > 반드시 값을 넘겨주어야 한다.
// }

export default MyComponent;