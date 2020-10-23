import entries from './entries';

// A Function that will fecth all entries
let getEntries = () => {
    // Later On: We will connect to a backend and fetch all the entries from it. 
    return entries;
}

// Object 
let server = {
    fetchEntries: getEntries
};

export default server;