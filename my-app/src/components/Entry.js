import React from 'react';
import './Entry.css';
// All the entries from the server 


class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "flowers":["Tulip", "Crocus", "Buttercup","Lavender" , "Carnation", "Dahlia", "Orchids",
                    "Aster", "Peony", "Hollyhock", "Foxgloves", "Hyacith"],
            animals: ["Bats", "Horse", "Giraffe","Coyote", "Goose", "Leopard", "Dog",
                     "Crow", "Flamingo", "Eagle", "Tiger", "Rabbit"],
            mathematics: ["43", "92", "-4","-43", "787", "43", "64",
                     "-1223", "1886", "98", "99", "30"],
        }
 
    }

    randomizeAnwersLocation = () => {
        
        const { entry } = this.props;
        const { flowers, animals, mathematics } = this.state;
        var rand1 = Math.floor(Math.random() * 6) + 1;
        var rand2 = Math.floor(Math.random() * 6) + 6;

        return(
            <div>
                <input type="radio" name="cc" className="answers" value="visa"/> {entry.details[0].answer}
                <input type="radio" name="cc" className="answers" value="mastercard"/>{entry.details[0].guesses[rand1]}
                <input type="radio" name="cc" className="answers" value="amex"/> {entry.details[0].guesses[rand2]}
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
                    <div id="image">{entry.details[0].image}</div>
                    {entry.details[0].question}</p>
                    {this.randomizeAnwersLocation()}
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