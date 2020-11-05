import React from 'react';
import './Entry.css';

// All necessary data to each quiz question
var data = [
    {passed: false},
    {passed: false},
    {passed: false},
    {passed: false},
    {passed: false},
    {passed: false}
];

class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userAnswers: []
    }
    }
    // 
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    handleOnClick = (e) => {
    
        let index = this.props.cursor;
        let obj = data[index];
        obj["answer"] = e.target.value;
        this.setState({userAnswers: data});
        this.props.onChoiceSelected(e.target.value);
    }
    getPossibleAnswers = () => {
        
        const { entry, cursor } = this.props;

        if(data[cursor]["passed"] === false) {   
        
            var rand1 = Math.floor(Math.random() * 6) + 1;
            var rand2 = Math.floor(Math.random() * 6) + 6;
            var answers = [entry.answer, entry.guesses[rand1], entry.guesses[rand2]];
            
            //Records the choices 
            let index = this.props.cursor;
            let obj = data[index];
            obj["choices"] = answers;

            //To show that this page has been passed 
            data[cursor]["passed"] = true;
            // Randomized the option locations 
            this.shuffle(answers);
            return(
                <div>
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[0] ? "checked" : ""} value={answers[0]}/> {answers[0]}
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[1] ? "checked" : ""} value={answers[1]}/>{answers[1]}
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[2] ? "checked" : ""} value={answers[2]}/> {answers[2]}
                </div>
            );
        }else{
            // Get all the stored choices 
            let index = this.props.cursor;
            let obj = data[index];
            let storedChoices =  obj["choices"];
            let currAnswer = obj["answer"];
            return(
                <div>
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={currAnswer === storedChoices[0] ? "checked" : ""} value={storedChoices[0]}/> {storedChoices[0]}
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={currAnswer === storedChoices[1]? "checked" : ""} value={storedChoices[1]}/>{storedChoices[1]}
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={currAnswer === storedChoices[2] ? "checked" : ""} value={storedChoices[2]}/> {storedChoices[2]}
                </div>
            );
        }

    }

    render() {

        const { entry } = this.props;

        /* 
            Show the entries 
            that we received from Home
        */
        return(
            <div>
                <div className="allEntries">
                    <p id="question">
                    <div id="image"><img src={require("../images/" + entry.image)} alt={entry.image}/></div>
                    {entry.question}</p>
                    {this.getPossibleAnswers()}
                </div>
                
            </div>
        );
    }}

export default Entry;