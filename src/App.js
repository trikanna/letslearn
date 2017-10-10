import React, { Component } from 'react';
import isElectron from 'is-electron';

class App extends Component {
  render() {
    console.log(isElectron());

    return (
      <div className="App">
        {
          isElectron() ? (<div className='native-header'></div>) : null
        }
        <h1>Let's Learn now</h1>
      </div>
    );
  }
}

export default App;
