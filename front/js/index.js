const btnInit = document.querySelector(".btn-init");
const question = document.querySelector(".content--title");
const subtitle = document.querySelector(".content--subtitle");
const questionsDiv = document.querySelector(".content--questions");
const description = document.querySelector(".content--description");
const textPrivacy = document.querySelector(".content--text");
const content = document.querySelector(".content");

function createButton(text) {
  const btnNew = document.createElement("button");
  btnNew.classList.add("button");
  btnNew.classList.add(`btn-${text}`);

  if (text === "sim") {
    btnNew.classList.add("btn-question");
    btnNew.innerHTML = "Sim";
    btnNew.setAttribute("onclick", "nextQuestion('Sim')");
  } else if (text === "nao") {
    btnNew.classList.add("btn-question");
    btnNew.innerHTML = "Não";
    btnNew.setAttribute("onclick", "nextQuestion('Não')");
  } else {
    btnNew.classList.add("btn-init");
    btnNew.classList.add("btn-enviar");
    btnNew.innerHTML = "Enviar";
    btnNew.setAttribute("onclick", "enviar()");
  }
  questionsDiv.appendChild(btnNew);
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
