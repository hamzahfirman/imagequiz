import React from 'react';

class HomePage extends React.Component {
  // State of this component
  constructor(props) {
    super(props);
    // State is an object
    this.state = {
        username: '',
        showLoginForm: false,
        authenticated: false
    };
  }
  // Events
  login = () => {
    this.setState({
      showLoginForm: true
    });
  }
  // Submit 
  logInSubmit = (event) => {
    if(this.state.username.trim().length > 0){
      //Let them into the Homepage
      this.setState({
        authenticated: true
      });
    }
    event.preventDefault();

  }
  hadleChange= (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // Changes the username
    this.setState({
      [name]: value
    });
  }
  // Render function: What user see on'Homepage'
  render() {

    // CONDITION: If the login button gets clicked
    if(!(this.state.authenticated) && this.state.showLoginForm){
      return(
          <div>
            <form onSubmit={this.logInSubmit}>
              <label for="username">Username</label> &nbsp;
              <input type="text" id="username" 
              value={this.state.username} 
              onChange={this.hadleChange} 
              name="username"/> &nbsp;
              <label for="password">Password</label> &nbsp;
              <input type="password" id="password" name="password"/><br/><br/>
              <button type="submit" id="loginNow">Login</button>
            </form>
          </div>
      );

    }else if(this.state.authenticated && this.state.showLoginForm){
        return (
          <div>
            Hello World
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
