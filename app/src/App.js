import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput.js' 
import UserOutput from './Components/UserOutput.js'

class App extends Component {
  state = {
    users: [
      { username: 'John' }
    ]
  }

usernameChangedHandler = (event) => {
  this.setState( {
      users: [
        {username: event.target.value}
      ]
  } )
}
  
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white'
    };

    return (
      <div className="App">
        <UserOutput
          style={style}
          username={this.state.users[0].username}/>
        <UserInput
          style={style}
          changed={this.usernameChangedHandler}/>
      </div>
    );
  }
}

export default App;
