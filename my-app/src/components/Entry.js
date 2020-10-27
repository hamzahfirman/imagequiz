import React from 'react';
import './Entry.css';
// All the entries from the server 


class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flowers:["Tulip", "Crocus", "Buttercup","Lavender" , "Carnation", "Dahlia", "Orchids",
                    "Aster", "Peony", "Hollyhock", "Foxgloves", "Hyacith"],
            animals: ["Bats", "Horse", "Giraffe","Coyote", "Goose", "Leopard", "Dog",
                     "Crow", "Flamingo", "Eagle", "Tiger", "Rabbit"],
            mathematics: ["43", "92", "-4","-43", "787", "43", "64",
                     "-1223", "1886", "98", "99", "30"],
        }
 
    }
    handleOnClick = () => {
        this.props.onChoiceSelected();
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