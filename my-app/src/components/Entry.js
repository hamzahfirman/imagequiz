import React from 'react';
// All the entries from the server 


class Entry extends React.Component {
    render() {
        const { entry } = this.props;
        return(
            <div>
                {/* 
                Show the entries 
                that we received from Home
                */}
               <div>{entry.name}</div>
               <div>{entry.origin}</div>
            </div>
        );
    }
}

export default Entry;