import React from 'react';
import './Images.css';
import { Redirect } from 'react-router-dom';
/* React-Bootstrap */
import { Table } from 'react-bootstrap';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            categoryId: 0
        }
    };
    // EVENT: Handles click events from images and changes the 'flowerName' value in the state with 
    // to the clicked flower name
    handleClick = (anId) => {
        // event.preventDefault();
        this.setState({
            categoryId: anId
        });

        // alert(name);
    }
    // FUNCTION: Returns a row with 4 columns of pictures 
    renderCategories = (cat) => {
    
        return (
                <td><img src={require("../images/" + cat.image)}  onClick={() => this.handleClick(cat.id)}/><br></br><div className="caption">{cat.name}</div></td>
        );
    }
   
    render(){

        if(this.state.categoryId != 0){ // flowerName is present 
            let username = this.props.aUsername;

            let from = {
                pathname: '/quiz', state: { 
                categoryId: this.state.categoryId, 
                username: username} 
            }
            return (
                <Redirect to={from} />
             );
        }
        return(
            <div>
            <table className="tableFlowers" >
                <tr>
                    {this.props.data.map(this.renderCategories)}
                </tr>
            </table>
        </div>
        );}

}

export default Images;