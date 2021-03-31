import React, {Component} from 'react';


class App extends Component {

  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'react');
  }

   getMyStorage() {
    //let myCookieData = document.cookie;
    let [key,myCookieData] = document.cookie.split('=');
    let myLocalStorageData = localStorage.getItem('Paragon');
    let mySessionStorageData = sessionStorage.getItem('frontend');
    console.log(myCookieData);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Click Here</button>
        <button onClick={this.getMyStorage}>Click Here</button>
      </div>
    );
  }
} 

export default App;