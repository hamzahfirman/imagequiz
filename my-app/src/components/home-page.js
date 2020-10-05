import React from 'react';

class HomePage extends React.Component {
  // State of this component
  constructor(props) {
    super(props);
    // State is an object
    this.state = {
        showLoginForm: false
    };
  }

  // Events
  login = () => {
    this.setState({
      showLoginForm: true
    });
  }
  signUp = () => {


  }
  // Render function: What user see on'Homepage'
  render() {
    // CONDITION: If the login button gets clicked
    if(this.state.showLoginForm){
      return(
          <div>
            <form>
              <label for="fname">Username</label> &nbsp;
              <input type="text" id="fname" name="fname"/> &nbsp;
              <label for="lname">Password</label> &nbsp;
              <input type="password" id="lname" name="lname"/><br/><br/>
              <button id="goLogIn">Go</button>
            </form>
          </div>
      );

    }else{
      return (
        <div className="Home">
          <header className="App-header">
          <h1>Welcome to Image Quiz App!</h1>
          <button id="login" onClick={this.login}>Log in</button>
          <button id="signUp" onClick={this.signUp}>Sign Up</button>
          </header>
        </div>
      );
    }
  }
};

export default HomePage;

// <label for="fname">Username</label> &nbsp;
// <input type="text" id="fname" name="fname"/> &nbsp;
// <label for="lname">Password</label> &nbsp;
// <input type="password" id="lname" name="lname"/><br/><br/>
// <input type="submit" value="Log In" />
