import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange}></Input>
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      name:event.currentTarget.value
    })
    console.log(this.state.name)
  };

  onFormSubmit= (event:React.FormEvent) => {
    event.preventDefault()
  }

  add = (): void => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}
export default App;
