import React, { Component } from 'react';
import { Form, Input } from './Input';
import Number from './Number';

interface IState {
  counter:number;
  name: string,
}

// class component 에서는 Component 다음에 <{props}, {state} > 의 타입을 적어줘야 됨
// 필요시 interface 로 생성하여 입력
class App extends Component <{}, IState > {
  state = {
    counter: 0,
    name:""
  }
  render(){
    const{counter, name} = this.state
    return <div>
      <Form onFormSubmit={this.onFormSubmit}>
        <Input value={name} onChange={this.onChange}></Input>
      </Form>
      <h3>{name}</h3>
      <Number count={counter}/>
      <button onClick={this.add}>add</button>
    </div>;
  }
  onChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget:{value:name}} = event;
    this.setState({
      name
    })
  }

  onFormSubmit = (event:React.FormEvent) => {
    event.preventDefault();
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
