const btnInit = document.querySelector(".btn-init");
const question = document.querySelector(".content--title");
const questionsDiv = document.querySelector(".content--questions");
const description = document.querySelector(".content--description");
const textPrivacy = document.querySelector(".content--text");
const content = document.querySelector(".content");

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

const answers = [];
let questionCount = 1;

function createButton(text) {
  const btnNew = document.createElement("button");
  btnNew.classList.add("button");
  btnNew.classList.add(`btn-${text}`);

  if (text === "sim") {
    btnNew.classList.add("btn-question");
    btnNew.innerHTML = "Sim";
    btnNew.setAttribute("onclick", "btn('Sim')");
  } else if (text === "nao") {
    btnNew.classList.add("btn-question");
    btnNew.innerHTML = "Não";
    btnNew.setAttribute("onclick", "btn('Não')");
  } else {
    btnNew.classList.add("btn-init");
    btnNew.innerHTML = "Enviar";
    btnNew.setAttribute("onclick", "enviar()");
  }
  questionsDiv.appendChild(btnNew);
}

function getQuestionById(id) {
  const selectedQuestion = questions.find(question => question.id === id);
  question.innerHTML = selectedQuestion.question;
}

btnInit.addEventListener("click", event => {
  event.preventDefault();

  textPrivacy.classList.add("content--privacy");
  description.classList.add("disabled");
  btnInit.classList.add("disabled");

  getQuestionById(1);

  questionsDiv.appendChild(question);

  createButton("sim");
  createButton("nao");
});

function btn(answer) {
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
