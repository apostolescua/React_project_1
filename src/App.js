import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function formatTime(date) {
  return date.toLocaleTimeString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return(
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
      {formatDate(props.date)}
    </div>


  </div>
);
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Sir Kaiba',
    avatarUrl: 'https://ms.yugipedia.com//thumb/4/41/Kaiba-MDDG.png/257px-Kaiba-MDDG.png',
  },
};

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter() {
    this.setState (state => ( {
      counter: state.counter + 1
    }));
  }
  //
  decrementCounter() {
    this.setState (state => ( {
      counter: state.counter - 1
    }));
  }
  //
  resetCounter() {
    this.setState (state => ( {
      counter: state.counter = 0
    }));
  }
  //
  render() {
    return (
      <div>
        <h1>{this.state.counter} Life Points</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.resetCounter}>Reset</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}


class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // the binding to make "this" work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ( {
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


class App extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
         />
        <Toggle />
        <Counter />
        </div>
    );
  }
}

export default App
