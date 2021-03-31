import React, {Component} from 'react';


class App extends Component {
   setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'react');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Click Here</button>
      </div>
    );
  }
} 

export default App;