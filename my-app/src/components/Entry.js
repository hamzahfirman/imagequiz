import React from 'react';
import './Entry.css';
// All the entries from the server 

var passed = false;
class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userAnswers: []
        }
    
    }
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    handleOnClick = (e) => {
        let x = this.state.userAnswers;
        x[this.props.cursor]["answer"] = e.target.value;
        this.setState({userAnswers: x});
        this.props.onChoiceSelected(e.target.value);
    }
    randomizeAnswersLocation = () => {
        
        const { entry, cursor } = this.props;
        if(passed == false) {   
            passed = true;
            var rand1 = Math.floor(Math.random() * 6) + 1;
            var rand2 = Math.floor(Math.random() * 6) + 6;
            var answers = [entry.answer, entry.guesses[rand1], entry.guesses[rand2]];
            
            //Records the choices 
            let x = this.state.userAnswers;
            let obj = {};
            obj["choices"] = answers;
            x[this.props.cursor] = obj;

            this.shuffle(answers);
            return(
                <div>
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[0] ? "checked" : ""} value={answers[0]}/> {answers[0]}
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[1] ? "checked" : ""} value={answers[1]}/>{answers[1]}
                    <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[2] ? "checked" : ""} value={answers[2]}/> {answers[2]}
                </div>
            );
        }
        // } 
        // var randomized = this.getRadios(answers);
        // return(
        //     <div>
        //         <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[0] ? "checked" : ""} value={answers[0]}/> {answers[0]}
        //         <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[1] ? "checked" : ""} value={answers[1]}/>{answers[1]}
        //         <input type="radio" name="categories" className="answers" onClick={this.handleOnClick} checked={this.state.userAnswers[cursor] === answers[2] ? "checked" : ""} value={answers[2]}/> {answers[2]}
        //     </div>
        // );
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
                    {this.randomizeAnswersLocation()}
                </div>
                
            </div>
        );
    }}

export default Entry;