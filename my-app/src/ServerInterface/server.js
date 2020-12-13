let api = "http://localhost:3002";
let server = {
    fetchQuizzes: () => {return(fetch(api + "/quizzes").then(x => x.json()));},
    fetchQuestions: (quizid) => {return(fetch(api + `/quiz/${quizid}`).then(x => x.json()));},
    pushAScore: (data) => {return (fetch(api + "/score", {
                method: 'POST',
                header: {'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
    }).then(x => x.json()).then(y => console.log(y)).catch(e => console.log(e)));}
}

export default server;