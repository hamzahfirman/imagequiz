import React from 'react';
import './Home.css';
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
              name="username"/>  
              <button type="submit" className="loginButton" id="loginNow">Login</button>
            </form>
          </div>
      );
      }else{
      return (
        <div className="Home">
          <header className="App-header">
            Welcome to Image Quiz App!
            {this.state.authenticated ? this.state.username: 
            <button id="login" className="loginButton" onClick={this.login}>Log in</button>}
          </header>
        </div>
      );
    }
  }
};

export default HomePage;
