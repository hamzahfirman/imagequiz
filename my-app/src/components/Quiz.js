import React from 'react';
import server from '../ServerInterface/server';
import Entry from './Entry';

/* QUIZ TIME */
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            cursor: 0,
            mounted: false
        };
    }
    // Calls 'Entry' component
    questions = () => {
        const { cursor, entries } = this.state;
        return (
            <Entry entry={entries[cursor]}/> 
        );
    }
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
    
    render() {
        if(this.state.entries.length > 0){
            return(
                <div>
                    {this.questions()}
                </div>
            );

        }else{
            this.setState({
                mounted: true
            })
        };
        return(
            <div>
                Something is wrong!
            </div>
        );

    }
}

export default Quiz;