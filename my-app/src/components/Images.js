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
/* React-Bootstrap */
import { Table } from 'react-bootstrap';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            flowers: [
                {one: daffodil, two: cherryblossom, three: lily, four: daisy},
                {one: sunflower, two: tulip, three: rose, four: waterlily}
            ],
            flowerName: ""
        }
    };

    handleClick = (name) => {
        // event.preventDefault();
        this.setState({
            flowerName: name
        });
        
        // alert(name);
    }
    /* FUNCTION: Returns a row with 4 columns of pictures   */
    renderFlowers = (flower) => {
    
        return (
            <tr>
                <td><img src={flower.one.picture} onClick={() => this.handleClick(flower.one.name)}/><br></br>{flower.one.name}</td>
                <td><img src={flower.two.picture}/><br></br>{flower.two.name}</td>
                <td><img src={flower.three.picture}/><br></br>{flower.three.name}</td>
                <td><img src={flower.four.picture}/><br></br>{flower.four.name}</td>
            </tr>
        );
    }
   
    render(){
        return(
            <div>
            <table className="tableFlowers" >
                {this.state.flowers.map(this.renderFlowers)}
            </table>
        </div>
        );}

}

// handleClick = (event) => {
//     let from = { pathname: '/entry'}
//     return (
//         <Redirect to={from} />
//     );
// }

class Flower {
    constructor(name, pictureName) {
        this.name = name;
        this.picture = pictureName;
    }
}
// Flower Objects 
let daffodil = new Flower('Daffodil', Daffodil);
let cherryblossom = new Flower('Cherry blossom', Cherryblossom);
let lily = new Flower('Lily', Lily);
let daisy = new Flower('Daisy', Daisy);
let sunflower = new Flower('Sunflower', Sunflower);
let tulip = new Flower('Tulip', Tulip);
let rose = new Flower('Rose', Rose);
let waterlily = new Flower('Water lily', Waterlily);


export default Images;