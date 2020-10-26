import React from 'react';
import Daisy from '../images/daisy.jpg';
import Sunflower from '../images/sunflower.png';
import Rose from '../images/rose.png';
import Waterlily from '../images/waterlily.png';
import Tulip from '../images/tulip.png';
import Daffodil from '../images/daffodil.png';



let entries = [
    {type: "flowers" ,
     details: [
        {
        
        image: <img src={Daffodil}/>,
        question: "What is the name of this flower?",
        answer: 'Lily',
        guesses: ["Tulip", "Crocus", "Buttercup","Lavender" , "Carnation", "Dahlia", "Orchids",
        "Aster", "Peony", "Hollyhock", "Foxgloves", "Hyacith"]

        },
        {
        
            image: <img src={Sunflower}/>,
            question: "What is the name of this flower?",
            answer: 'Sunflower',
            guesses: ["Tulip", "Crocus", "Buttercup","Lavender" , "Carnation", "Dahlia", "Orchids",
            "Aster", "Peony", "Hollyhock", "Foxgloves", "Hyacith"]
    
        },
        {
        
            image: <img src={Rose}/>,
            question: "What is the name of this flower?",
            answer: 'Rose',
            guesses: ["Tulip", "Crocus", "Buttercup","Lavender" , "Carnation", "Dahlia", "Orchids",
            "Aster", "Peony", "Hollyhock", "Foxgloves", "Hyacith"]
    
            }
        ]
        
    }
   
];
//     {name: 'Hello World' ,
//     origin: '() dis + envelop. ("dis" = in-)',
//     meanings: [
//         {type: 'verb',
//         meaning: 'become more advanced, mature or elaborate '
//              }
//        ]
//    },  
//    {name: 'Dawgs' ,
//    origin: '() dis + envelop. ("dis" = in-)',
//    meanings: [
//        {type: 'verb',
//        meaning: 'become more advanced, mature or elaborate '
//             }
//       ]
//   }
// ];
export default entries;