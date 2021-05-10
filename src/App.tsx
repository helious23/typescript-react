import React, { Component } from 'react';
import Number from './Number';

interface IState {
  counter:number
}

// class component 에서는 Component 다음에 <{props}, {state} > 의 타입을 적어줘야 됨
// 필요시 interface 로 생성하여 입력
class App extends Component <{}, IState > {
  state = {
    counter: 0
  }
  render(){
    const{counter} = this.state
    return <div>
      <Number count={counter}/>
      <button onClick={this.add}>add</button>
    </div>;
  }
  add = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }
} 

export default App;
