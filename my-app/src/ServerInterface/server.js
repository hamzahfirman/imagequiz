 const express = require('express');
 var cors = require('cors');
 let data = require('./entries');
 const app = express();
 const port = 3001;

 // Middlewares
 app.use(cors());

 app.get('/entries' , (request, response) => {
     response.json(data.entries);
 })

 app.get('/quiz/:type' , (request, response) => {
    let searchFor = request.params.type.toLowerCase();
    let found = data.entries.find(x => x.type === searchFor);
    if(found) {
        response.json(found);
    }
    else{
        response.status(404).json({error: `The type ${searchFor} could not be found`})
    }
    
})

 app.listen(port, () => {
     console.log(`Server is listening on port ${port}!`)
 })
// A Function that will fecth all entries
// let getEntries = (catName) => {
//     // Later On: We will connect to a backend and fetch all the entries from it. 

//     // alert(cat);
//     let found = entries.find(x => x.type === catName.toLowerCase());
//     return found;
// }

// // Object 
// let server = {
//     fetchEntries: getEntries
// };

// export default server;