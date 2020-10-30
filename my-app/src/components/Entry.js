import React from 'react';
import './Entry.css';
// All the entries from the server 


class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         
        }
    
    }
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }
    // getRadios = (currAnswers) => {
    //     var count= 3;
    //     var first = "";
    //     var second = "";
    //     var third = "";
    //     while(count > 0){
    //         var random  = Math.floor(Math.random() * count);
    //         if(count == 1 ){
    //             first = currAnswers[random];

    //         }else if (count == 2){
    //             second = currAnswers[random];
    //         }else if (count == 3){
    //             third = currAnswers[random]
    //         }
    //         count -= 1;
    //         currAnswers.shift();
    //     }
    //     return [first, second, third];
        
    // }
    handleOnClick = (e) => {
        this.props.onChoiceSelected(e.target.value);
    }
    randomizeAnswersLocation = () => {
        
        const { entry } = this.props;
        const { flowers, animals, mathematics } = this.state;
        var rand1 = Math.floor(Math.random() * 6) + 1;
        var rand2 = Math.floor(Math.random() * 6) + 6;
        var answers = [entry.answer, entry.guesses[rand1], entry.guesses[rand2]];
        this.shuffle(answers);
        
        // var randomized = this.getRadios(answers);
        return(
            <div>
                <input type="radio" name="categories" className="answers" onClick={this.handleOnClick}  value={answers[0]}/> {answers[0]}
                <input type="radio" name="categories" className="answers" onClick={this.handleOnClick}  value={answers[1]}/>{answers[1]}
                <input type="radio" name="categories" className="answers" onClick={this.handleOnClick}  value={answers[2]}/> {answers[2]}
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
    }
}
   // let name = "";

        // const location = this.props.location;
        // if(location) {
        //   if(location.state){
        //     if(location.state.flowerName){
        //      name = location.state.flowerName;
        //     }
        //   }
        // }
export default Entry;