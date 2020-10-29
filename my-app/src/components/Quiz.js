import React from 'react';
import server from '../ServerInterface/server';
import Entry from './Entry';
// CSS File 
import './Quiz.css';

/* QUIZ TIME */
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            cursor: 0,
            mounted: false,
            score: 0
        };
    }
    onChoiceSelected = (answer) => {
        let { cursor, score, entries } = this.state;
        if(entries[cursor].answer == answer){
            this.setState({score: score + 10});
        }
        
    }
    // MEHTOD: Handles back button whenever it gets clicked. It will 
    // take the user to the next question by substracting 1 from the cursor
    handleOnClickBack = () => {
        let { cursor } = this.state;
        this.setState({cursor: cursor - 1}); 
    }
    // MEHTOD: Handles next button whenever it gets clicked. It will 
    // take the user to the next question by adding 1 to the cursor
    handleOnClickNext = () => {
        let { cursor } = this.state;
        this.setState({cursor: cursor + 1});
    }
    // Calls 'Entry' component
    // NOTES: Once the event listener is executed below, it will 
    // sends an object that tells what event has happened 
    // For instance, it can tell you what key was pressed
    questions = () => {
        const { cursor, entries, score } = this.state;
        if((cursor == 0) && (cursor < entries.length -1)){ // Inital stage in the Quiz
            return (
                <div>
                    <Entry onChoiceSelected={this.onChoiceSelected} entry={entries[cursor]}/> 
                    <p>The current score is{score}</p>
                    <div id="nextContainer">
                        <button id="nextButton" onClick={this.handleOnClickNext}>Next</button>
                    </div>
                </div>
            );

        } else if((cursor > 0) && (cursor < entries.length -1)) { // After passing the first question
            return (
                <div>
                    <Entry onChoiceSelected={this.onChoiceSelected} entry={entries[cursor]}/> 
                    <p>The current score is{score}</p>
                    <div id="buttonContainer">
                        <button id="button" onClick={this.handleOnClickBack}>Back</button>
                        <button id="button" className="twoButtons"onClick={this.handleOnClickNext}>Next</button>
                    </div>
                </div>
            );
        }else{
            return ( // When the user has reached the last queston of the Quiz
                <div>
                    <Entry onChoiceSelected={this.onChoiceSelected} entry={entries[cursor]}/>
                    <p>The current score is{score}</p> 
                    <div id="backContainer">
                        <button id="backButton" onClick={this.handleOnClickBack}>Back</button>
                    </div>
                </div>
            );
        }
    }
    // NOTES: Once the event listener is executed below, it will 
    // send an object that tells what event has happened 
    // For instance, it can tell you what key was pressed
    // handleKeyDown = (e) => {


     // }
    // This function will be executed after everything gets loaded in the DOM.
    // After 'render()' executed 
    componentDidMount() {

        let name = "";

        const location = this.props.location;
        // const cat = {
        //     flowers: 0,animals: 1,mathematics: 2};
        if(location) {
            if(location.state){
                 if(location.state.categoryName){
                    name = location.state.categoryName;
            }
        }
        // 'entries' - Calls a function 'fecthEntries()' in server.js component
        const quiz = server.fetchEntries(name);
        // Passes a list of objects/ entries frome entries.js
        this.setState({entries: quiz.details});
        // Once the user pressed 
        // Also, it is placed in this component because 'window' object 
        // only available after 'render()' object gets render.
        window.addEventListener("keydown", this.handleKeyDown);
    }
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
        }
        return(
            <div>
                Data is loading!
            </div>
        );

    }
}

export default Quiz;