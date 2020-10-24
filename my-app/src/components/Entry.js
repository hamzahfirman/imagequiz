import React from 'react';
import './Entry.css'
// All the entries from the server 


class Entry extends React.Component {
    render() {
        let name = "";

        const location = this.props.location;
        if(location) {
          if(location.state){
            if(location.state.flowerName){
             name = location.state.flowerName;
            }
          }
        }
        // const { entry } = this.props;
        /* 
            Show the entries 
            that we received from Home
        */
        return(
            <div>
                <div className="allEntries">
                    <div>Hello World {name}</div>
               
                </div>
            </div>
        );
    }
}

export default Entry;