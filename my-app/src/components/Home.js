import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import server from '../ServerInterface/server';
/* Other Components */
import Images from './Images';
import Entry from './Entry';

class Home extends React.Component {
  // State of this component
  constructor(props) {
    super(props);
    // State is an object
    this.state = {
        entries: [],
        cursor: 0,
        username: ''    
    };
  };

  // NOTES: Once the event listener is executed below, it will 
  // send an object that tells what event has happened 
  // For instance, it can tell you what key was pressed
  handleKeyDown = (e) => {
    // Deconstruction:
    const { cursor, entries } = this.state;

    if(e.keyCode === 39 && (cursor < entries.length -1)){ // Right arrow key 
      // Increment the cursor key in the state in order to move 
      // to the next word (right)
      this.setState({cursor: cursor + 1});
    } else if (e.keyCode ==  37 && (cursor > 0)) {  // Left arrow key
      // Decrement the cursor key in the state in order to move 
      // to the previous word (left)
      this.setState({cursor: cursor - 1});
    }
  }

  body = (aName) => {
    /* 
    Desconstruct an object
    
    The line below is equivalent to the 2 lines below */ 
    // const entries  = this.state.entries; 
    // const cursor = this.state.cursor;
    const { entries, cursor } = this.state;

    return( 
      // 'Entry' component responsible for giving the entries
      // and pass entries 
      <div>
      Hey, {aName}. Welcome to Image Quiz App Homepage!
      {entries.length > 0 ? 
        <Entry entry={entries[cursor]}/> : " "}
      </div>
  );
  }
// This function will be executed after everything gets loaded in the DOM.
// After 'render()' executed 
componentDidMount() {
    // 'entries' - Calls a function 'fecthEntries()' in server.js component
    const entries = server.fetchEntries();
    // Passes a list of objects/ entries frome entries.js
    this.setState({entries: entries});
    // Once the user pressed 
    // Also, it is placed in this component because 'window' object 
    // only available after 'render()' object gets render.
    window.addEventListener("keydown", this.handleKeyDown);
  }
// Will be executed right before the page gets destroyed 
componentWillUnmount(){
  // This will remove the current event listener in 'componentDidMount()'
  // right before the page gets detroyed 
  window.removeEventListener("keydown", this.handleKeyDown);

}
  // Render function: What user see on'Homepage'
  render() {
    // Capturing the passed in data from 'Login' component
    let username = '';
    // 'location' - All of the passed in data from other components will
    // be stored here in the 'location' method by props.
    const location = this.props.location;
    if(location) {
      if(location.state){
        if(location.state.user){
          username = location.state.user;
        }
      }
    }
    {/* A user has been logged in to the website */}
    if(username.length > 0){
      return(
        <div>
          <div className="loginButton">
          {username}
          </div>
              {this.body(username)}
              <Images />
        </div>
      );
      }else{
        return (
          <div className="Home">
      
            <div className="loginButton">
                {username.length > 0 ? username: 
                <Link to='/login'>Login</Link>}
            </div>
              Welcome to Image Quiz App Homepage!
          </div>
        );
    }
  }
};

export default Home;
