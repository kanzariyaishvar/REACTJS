import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      disable: true,
    };

    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc() {
    this.setState((mycountn) => ({
      count: mycountn.count + 1,
      disable: false,
    }));
  }

  handleDec() {
    this.setState((mycountn) => {
      if (mycountn.count > 1) {
        return { count: mycountn.count - 1 };
      } else {
        return { count: 0, disable: true };
      }
    });
  }

  render() {
    return (
      <div>
        <center>
        <div id="main">
          <div>
            <button disabled={this.state.disable} onClick={this.handleDec}>-</button>
          </div>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.handleInc}>+</button>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;

// Assuming you have the Counter component defined somewhere
class Counter extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.ishvar}</h3>
      </div>
    );
  }
}
