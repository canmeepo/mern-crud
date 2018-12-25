import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8888/').then(res => res.json()).then(data => console.warn(data))
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
