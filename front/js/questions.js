const questions = [
  { id: 1, question: "Você dormiu bem?" },
  { id: 2, question: "Pergunta teste?" },
  { id: 3, question: "Pergunta teste2?" },
  { id: 4, question: "Pergunta teste3?" },
  { id: 5, question: "Pergunta teste4?" },
  { id: 6, question: "Pergunta teste5?" },
  { id: 7, question: "Pergunta teste6?" },
  { id: 8, question: "Pergunta teste7?" },
  { id: 9, question: "Pergunta teste8?" },
  { id: 10, question: "Pergunta teste9?" }
];
const conditionalQuestions = [
  {
    id: 1,
    question: ""
  }
];

const answers = [];
let questionCount = 1;

function nextQuestion(answer) {
  const singularAnswer = {
    id: questionCount,
    question: question.innerText,
    answer: answer
  };
  answers.push(singularAnswer);

  questionCount = questionCount + 1;

  if (questionCount > 10) {
    let btnSim = document.querySelector(".btn-sim");
    btnSim.classList.add("disabled");
    let btnNao = document.querySelector(".btn-nao");
    btnNao.classList.add("disabled");
    question.innerText = "A SME agradece a colaboração";
    createButton("Enviar");
    return;
  }

  getQuestionById(questionCount);

  console.log(answers);
}

function enviar() {
  let btnEnviar = document.querySelector(".btn-enviar");
  btnEnviar.classList.add("disabled");
  question.classList.add("disabled");
  subtitle.classList.remove("disabled");
  subtitle.innerText = "Fim do teste";
}
