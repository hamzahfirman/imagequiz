import Quiz from "../components/Quiz";

let api = "http://localhost:3002";
let server = {
    fetchQuizzes: () => {return(fetch(api + "/quizzes").then(x => x.json()));},
    fetchQuestions: (quizid) => {return(fetch(api + `/quiz/${quizid}`).then(x => x.json()));}
}

export default server;