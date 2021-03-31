import React, {Component} from 'react';
class App extends Component {

  setLocalStorage() {
    localStorage.setItem('Arena', 'Selection Month');

  }

  getLocalStorage() {
    let myLocalStorageData = localStorage.getItem('Arena');

  }
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Click Here</button>
        <button onClick={this.getLocalStorage}>Click Here</button>
      </div>

    );
  }
}

export default App;