import React from 'react';
import './Entry.css'
// All the entries from the server 


class Entry extends React.Component {
    render() {
        const { entry } = this.props;
        /* 
            Show the entries 
            that we received from Home
        */
        return(
            <div>
                <div className="allEntries">
                    <div>{entry.name}</div>
                    <div>{entry.origin}</div>
                </div>
            </div>
        );
    }
}

export default Entry;