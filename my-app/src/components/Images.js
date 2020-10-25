import React from 'react';
import './Images.css';
import { Redirect } from 'react-router-dom';
/* All images  */
import Daffodil from '../images/daffodil.png';
import Cherryblossom from '../images/cherryblossom.png';
import Lily from '../images/lily.jpg';
import Daisy from '../images/daisy.jpg';
import Sunflower from '../images/sunflower.png';
import Rose from '../images/rose.png';
import Waterlily from '../images/waterlily.png';
import Tulip from '../images/tulip.png';
import Mathematics from "../images/math.png";
import Animals from "../images/animal1.png";
import Flowers from "../images/sunflower3.png";
/* React-Bootstrap */
import { Table } from 'react-bootstrap';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            categories: [
                {one: flowers, two: animals, three: mathematics},
            ],
            categoryName: ""
        }
    };
    // EVENT: Handles click events from images and changes the 'flowerName' value in the state with 
    // to the clicked flower name
    handleClick = (name) => {
        // event.preventDefault();
        this.setState({
            categoryName: name
        });

        // alert(name);
    }
    // FUNCTION: Returns a row with 4 columns of pictures 
    renderCategories = (cat) => {
    
        return (
            <tr>
                <td><img src={cat.one.picture} onClick={() => this.handleClick(cat.one.name)}/><br></br>{cat.one.name}</td>
                <td><img src={cat.two.picture} onClick={() => this.handleClick(cat.two.name)}/><br></br>{cat.two.name}</td>
                <td><img src={cat.three.picture} onClick={() => this.handleClick(cat.three.name)}/><br></br>{cat.three.name}</td>
            </tr>
        );
    }
   
    render(){

        if(this.state.categoryName.length > 0){ // flowerName is present 
            let from = { pathname: '/quiz', state: { categoryName: this.state.categoryName } }
            return (
                <Redirect to={from} />
             );
        }
        return(
            <div>
            <table className="tableFlowers" >
                {this.state.categories.map(this.renderCategories)}
            </table>
        </div>
        );}

}

// Quiz Categories 

class Flower {
    constructor(name, pictureName) {
        this.name = name;
        this.picture = pictureName;
    }
}
class Animal {
    constructor(name, pictureName) {
        this.name = name;
        this.picture = pictureName;
    }
}
class Mathematic {
    constructor(name, pictureName) {
        this.name = name;
        this.picture = pictureName;
    }
}
// Flower Objects 
let flowers = new Flower('Flowers', Flowers);
let animals = new Flower('Animals', Animals);
let mathematics = new Flower('Mathematics', Mathematics);
// let cherryblossom = new Flower('Cherry blossom', Cherryblossom);
// let lily = new Flower('Lily', Lily);
// let daisy = new Flower('Daisy', Daisy);
// let sunflower = new Flower('Sunflower', Sunflower);
// let tulip = new Flower('Tulip', Tulip);
// let rose = new Flower('Rose', Rose);
// let waterlily = new Flower('Water lily', Waterlily);


export default Images;