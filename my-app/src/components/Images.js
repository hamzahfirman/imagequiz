import React from 'react';
/* All images  */
import Cherryblossom from '../images/cherryblossom.png';
// import Lily from '../images/lily.jpg';
// import Daisy from '../images/daisy.jpg';
// import Sunflower from '../images/sunflower.png';
// import Rose from '../images/tulip.png';
// import Waterlily from '../images/waterlily.png';
class Images extends React.Component {
    render(){
        return(
            <div>
                <img src={Cherryblossom}/>
            </div>
        );}
    // let daffodil = new Flower('Daffodil', 'daffodil.png');
    // let cherryblossom = new Flower('Cherry blossom', 'cherryblossom.png');
    // let lily = new Flower('Lily', 'lily.jpg');
    // let daisy = new Flower('Daisy', 'daisy.jpg');
    // let sunflower = new Flower('Sunflower', 'sunflower.png');
    // let tulip = new Flower('Tulip', 'tulip.png');
    // let rose = new Flower('Rose', 'rose.png');
    // let waterlily = new Flower('Water lily', 'waterlily.png');
    
}

export default Images;