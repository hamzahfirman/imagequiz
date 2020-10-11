import React from 'react';


class Login extends React.Component {
    // State of this component
    constructor(props) {
    super(props);
    // State is an object
    this.state = {
        username: '',
        authenticated: false
        };
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
    render() {
        return(
            <div>
                <form className="loginNow" onSubmit={this.logInSubmit}>
                    <label for="username">Username:</label> &nbsp;
                    <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.hadleChange} 
                        name="username"/>  
                    <button type="submit" id="loginNow">Login</button>
                </form>
            </div>
        );
    }
}


export default Login;