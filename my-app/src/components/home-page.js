import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Image Quiz App!</h1>
          <form action="/components/home-page">
            <label for="fname">Username</label> &nbsp;
            <input type="text" id="fname" name="fname"/> &nbsp;
            <label for="lname">Password</label> &nbsp;
            <input type="password" id="lname" name="lname"/><br/><br/>
            <input type="submit" value="Log In" />
        </form> 
        <button id="signUp">Sign Up</button>
        </header>
      </div>
    );
}};

export default HomePage;