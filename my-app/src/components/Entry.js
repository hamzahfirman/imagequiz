import React from 'react';
import './Entry.css';
// All the entries from the server 


class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
 
    }
    handleOnClick = (e) => {
        this.props.onChoiceSelected(e.target.value);
    }
    randomizeAnswersLocation = () => {
        
        const { entry } = this.props;
        const { flowers, animals, mathematics } = this.state;
        var rand1 = Math.floor(Math.random() * 6) + 1;
        var rand2 = Math.floor(Math.random() * 6) + 6;

        return(
            <div>
                <input type="radio" name="cc" className="answers" onClick={this.handleOnClick} value={entry.answer}/> {entry.answer}
                <input type="radio" name="cc" className="answers" onClick={this.handleOnClick}  value={entry.guesses[rand1]}/>{entry.guesses[rand1]}
                <input type="radio" name="cc" className="answers" onClick={this.handleOnClick}  value={entry.guesses[rand2]}/> {entry.guesses[rand2]}
            </div>
        );
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