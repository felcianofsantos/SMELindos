const questions = [
  { id: 1, question: "Você dormiu na noite/dia ontem?" },
  {
    id: 2,
    question:
      "Você está sentindo alguma dor ao caminhar, se abaixar ou pegar algum peso?"
  },
  { id: 3, question: "Você bebeu alguma cervejinha ontem?" },
  {
    id: 4,
    question:
      "Você está usando algum medicamento controlado (remédio pra dormir, calmante, etc.)?"
  },
  { id: 5, question: "Você está se sentindo estressado ou agitado??" },
  {
    id: 6,
    question:
      "Você está se sentindo triste ou deprimido hoje ou nos últimos tempos?"
  },
  { id: 7, question: "Está tudo bem com você e com sua família?" },
  {
    id: 8,
    question:
      "Você está tendo dificuldades na atividade que executa no trabalho ou com seus colegas?"
  },
  { id: 9, question: "Você está com dificuldades financeiras?" },
  { id: 10, question: "Você está sentindo algum mal estar?" }
];
const conditionalQuestions = [
  {
    id: 1,
    question: "Clonazepam?"
  },
  {
    id: 2,
    question: "Fenobarbital?"
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
