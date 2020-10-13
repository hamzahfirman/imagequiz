import entries from './entries';
let getEntries = () => {
    // Later On: We will connect to a backend and fetch all the entries from it. 
    return entries;
}

let server = {
    fetchEntries: getEntries 
};

export default server;