const start= document.getElementById('start');
const container = document.getElementById('container');
const bodyContainer = document.getElementById('body-container');

let cursor = 0;
let score = 0;
const urlForQuestions="./images/question.png"
const questions = [
    {
        numero: 1,
        question: "Quel est le nom de la planète la plus proche du soleil ?",
        answers: [
            { text: "Mercure", correct: true },
            { text: "Vénus", correct: false },
            { text: "Terre", correct: false },
            { text: "Mars", correct: false },
        ],
    },

    {
        numero: 2,
        question: "En quelle année a eu lieu la prise de la Bastille ?",
        answers: [
            { text: "1798", correct: false },
            { text: "1799", correct: false },
            { text: "1789", correct: true },
            { text: "1800", correct: false }
        ],
    },
    {
        numero: 3,
        question: "Quel est le nom du premier homme à avoir marché sur la lune ?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Yuri Gagarin", correct: false },
            { text: "Jim Lovell", correct: false },
        ],
    },
    {
        numero: 4,
        question: " Quel écrivain français né en Algérie s'est rendu célèbre à la fin des années 50 0,25 pour ses prises de position politiques qui l'opposèrent aux communistes et à l'existentialisme de Sartre ? Il publia notamment La Peste, Caligula et l'homme révolté",
        answers: [
            { text: "Jean-Paul Sartre", correct: false },
            { text: "François Mauriac", correct: false },
            { text: "Paolo Coelho", correct: false },
            { text: "Albert Camus", correct: true }
        ],
    },
    {
        numero: 5,
        question: "Qui est l'actuel roi du Maroc ? ",
        answers: [
            { text: "Hassan II", correct: false },
            { text: "Mohammed VI", correct: true },
            { text: "Mohammed V", correct: false },
            { text: "Mohammed IV", correct: false }
        ],
    },
    {
        numero: 6,
        question: "Quel est le plus petit Etat du monde? ",
        answers: [
            { text: "Le Vatican", correct: true },
            { text: "Monaco", correct: false },
            { text: "Andorre", correct: false },
            { text: "Malte", correct: false }
        ],
    },
    {
        numero: 7,
        question: "Quel est le plus grand pays du monde ?",
        answers: [
            { text: "La Russie", correct: true },
            { text: "Le Canada", correct: false },
            { text: "La Chine", correct: false },
            { text: "Les Etats-Unis", correct: false }
        ],
    },
    {
        numero: 8,
        question: "Quel est le plus grand océan du monde ?",
        answers: [
            { text: "L'océan Atlantique", correct: false },
            { text: "L'océan Indien", correct: false },
            { text: "L'océan Pacifique", correct: true },
            { text: "L'océan Arctique", correct: false }
        ],
    },
    {
        numero: 9,
        question: "Quel est le plus grand désert du monde ?",
        answers: [
            { text: "Le Sahara", correct: false },
            { text: "Le désert de Gobi", correct: false },
            { text: "Le désert du Kalahari", correct: false },
            { text: "L'Antarctique", correct: true }
        ],
    },
    {
        numero: 10,
        question: "Quel est le plus grand fleuve du monde ?",
        answers: [
            { text: "Le Nil", correct: false },
            { text: "Le Congo", correct: false },
            { text: "L'Amazone", correct: true },
            { text: "Le Mississippi", correct: false }
        ],
    },
    {
        numero: 11,
        question: "Quel est le plus grand lac du monde ?",
        answers: [
            { text: "Le lac Baïkal", correct: true },
            { text: "Le lac Victoria", correct: false },
            { text: "Le lac Supérieur", correct: false },
            { text: "Le lac Tanganyika", correct: false }
        ],
    },
    {
        numero: 12,
        question: "Quel est le plus grand archipel du monde ?",
        answers: [
            { text: "Les Philippines", correct: false },
            { text: "L'Indonésie", correct: true },
            { text: "Les Maldives", correct: false },
            { text: "Les Bahamas", correct: false }
        ],
    },
    {
        numero: 13,
        question: "Quel est le plus grand pays d'Amérique du Sud ?",
        answers: [
            { text: "Le Brésil", correct: true },
            { text: "L'Argentine", correct: false },
            { text: "Le Pérou", correct: false },
            { text: "La Colombie", correct: false }
        ],
    },
    {
        numero: 14,
        question: "Quel peintre a inventé le cubisme ? ",
        answers: [
            { text: "Pablo Picasso", correct: true },
            { text: "Salvador Dali", correct: false },
            { text: "Vincent Van Gogh", correct: false },
            { text: "Leonard de Vinci", correct: false }
        ],
    },
    {
        numero: 15,
        question: "Que font la somme de -5/14 + 4/21 ?",
        answers: [
            { text: "1/6", correct: false },
            { text: "1/7", correct: true },
            { text: "1/8", correct: false },
            { text: "1/9", correct: false }
        ],
    },
    {
        numero: 16,
        question: "L'année 2012 est une année bissextile. Quelle est la prochaine année bissextile ?",
        answers: [
            { text: "2013", correct: false },
            { text: "2014", correct: false },
            { text: "2015", correct: false },
            { text: "2016", correct: true }
        ],
    },
    {
        numero: 17,
        question: "Quel est le plus grand nombre entier qui s'écrit avec les lettres dans l'ordre alphabétique ?",
        answers: [
            { text: "Cent", correct: false },
            { text: "Mille", correct: false },
            { text: "Million", correct: false },
            { text: "Dix", correct: true }
        ],
    },
    {
        numero: 18,
        question: "L'opposé de l'opposé de l'opposé de l'opposé de l'opposé de l'opposé de 5 est :",
        answers: [
            { text: "5", correct: false },
            { text: "-5", correct: false },
            { text: "0", correct: false },
            { text: "1", correct: true }
        ],
    },
    {
        numero: 19,
        question: "L'opposé de 25 - 60 est :",
        answers: [
            { text: "25 - 60", correct: false },
            { text: "60 - 25", correct: false },
            { text: "-25 + 60", correct: true },
            { text: "-60 + 25", correct: false }

        ],
    },
    {
        numero: 20,
        question: "L'écriture scientifique de 0,002 est :",
        answers: [
            { text: "2 x 10-3", correct: true },
            { text: "2 x 10-2", correct: false },
            { text: "2 x 10-1", correct: false },
            { text: "2 x 100", correct: false }
        ],
    },
    {
        numero: 21,
        question: "Quel grand fleuve traverse plusieurs pays africains, dont l'Ouganda, le Soudan et l'Égypte ?",
        answers: [
            { text: "Le Nil", correct: true },
            { text: "Le Congo", correct: false },
            { text: "Le Niger", correct: false },
            { text: "Le Zambèze", correct: false }
        ],
    },
    {
        numero: 22,
        question: "Quel pays est le plus grand producteur de cacao en Afrique ?",
        answers: [
            { text: "La Côte d'Ivoire", correct: true },
            { text: "Le Ghana", correct: false },
            { text: "Le Cameroun", correct: false },
            { text: "Le Nigeria", correct: false }
        ],
    },
    {
        numero: 23,
        question: "Quel pays africain est également connu sous le nom de \"Pays des Mille Collines\" en raison de son paysage vallonné ?",
        answers: [
            { text: "Le Burundi", correct: false },
            { text: "Le Kenya", correct: false },
            { text: "Le Rwanda", correct: true },
            { text: "L'Ouganda", correct: false }
        ],
    },
    {
        numero: 24,
        question: "Quel pays africain est le plus peuplé ?",
        answers: [
            { text: "Le Nigeria", correct: true },
            { text: "L'Égypte", correct: false },
            { text: "L'Éthiopie", correct: false },
            { text: "Le Kenya", correct: false }
        ],
    },
    {
        numero: 25,
        question: "Quel est le point le plus bas d'Afrique, situé à environ 155 mètres sous le niveau de la mer ?",
        answers: [
            { text: "Le lac Assal", correct: false },
            { text: "Le lac Kariba", correct: false },
            { text: "Le lac Malawi", correct: false },
            { text: "La dépression de Danakil", correct: true }
        ],
    },
    {
        numero: 26,
        question: " Quelle est la plus grande réserve faunique d'Afrique, située principalement en Tanzanie et au Kenya ?",
        answers: [
            { text: "Le parc national de Serengeti", correct: true },
            { text: "Le parc national Kruger", correct: false },
            { text: "Le parc national de Chobe", correct: false },
            { text: "Le parc national de Masai Mara", correct: false }
        ],
    },
    {
        numero: 27,
        question: "Dans quel pays d'Afrique se trouve le delta de l'Okavango, un écosystème unique et diversifié ?",
        answers: [
            { text: "La Namibie", correct: false },
            { text: "Le Mozambique", correct: false },
            { text: "Le Zimbabwe", correct: false },
            { text: "Le Botswana", correct: true }
        ],
    },
    {
        numero: 28,
        question: "Quel pays africain est le plus grand producteur de diamants ?",
        answers: [
            { text: "Le Botswana", correct: true },
            { text: "L'Afrique du Sud", correct: false },
            { text: "La Namibie", correct: false },
            { text: "Le Zimbabwe", correct: false }
        ],
    },
{
        numero: 29,
        question: "Quel pays africain est le plus grand producteur de pétrole ?",
        answers: [
            { text: "L'Algérie", correct: false },
            { text: "L'Angola", correct: false },
            { text: "Le Nigeria", correct: true },
            { text: "La Libye", correct: false }
        ],
},
{
        numero: 30,
        question: "Quelle est la monnaie utilisée au Maroc ?",
        answers: [
            { text: "Le franc CFA", correct: false },
            { text: "Le dirham", correct: true },
            { text: "Le dinar", correct: false },
            { text: "Le shilling", correct: false }
        ],
}


    ];
let userName;

start.addEventListener('click', function(){
  container.classList.add('hidden');
  const div = document.createElement("div");
    div.classList.add("name-section");
    const askName = document.createElement("h1");
    askName.classList.add("text-dark");
    askName.textContent = "Quel est votre nom ?*";
    const justFirstName = document.createElement("p");
    justFirstName.classList.add("text-muted");
    justFirstName.textContent = "Juste votre prénom suffit";
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Entrez votre nom...");
    inputName.classList.add("name-input");
    const submitName = document.createElement("button");
    submitName.classList.add("btn-start");
    submitName.textContent = "OK";
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-check");
    submitName.appendChild(icon);
    div.appendChild(askName);
    div.appendChild(justFirstName);
    div.appendChild(inputName);
    div.appendChild(submitName);
    bodyContainer.appendChild(div);
    submitName.addEventListener("click", function () {

        userName = inputName.value;
        if (userName === "") {
            console.log("empty name");
        }
        else {
            document.getElementsByClassName("name-section")[0].remove();
            let currentQuestion ;
                currentQuestion = renderQuestion(questions[cursor]);
                bodyContainer.appendChild(currentQuestion);

        }
    });
});
function renderQuestion(currentquestion) {
    const divQuestion = document.createElement("div");
    divQuestion.classList.add("question-section");
    const question = document.createElement("h1");
    question.classList.add("text-dark");
    question.textContent = currentquestion.numero +" - "+ currentquestion.question;
    const image = document.createElement("img");
    image.setAttribute("src", urlForQuestions);
    image.classList.add("image-question");
    const answerButtons = document.createElement("div");
    answerButtons.classList.add("answer-buttons");
    const button1 = document.createElement("button");
    button1.classList.add("btn-answer");
    button1.textContent = currentquestion.answers[0].text;
    const button2 = document.createElement("button");
    button2.classList.add("btn-answer");
    button2.textContent = currentquestion.answers[1].text;
    const button3 = document.createElement("button");
    button3.classList.add("btn-answer");
    button3.textContent = currentquestion.answers[2].text;
    const button4 = document.createElement("button");
    button4.classList.add("btn-answer");
    button4.textContent = currentquestion.answers[3].text;
    answerButtons.appendChild(button1);
    answerButtons.appendChild(button2);
    answerButtons.appendChild(button3);
    answerButtons.appendChild(button4);
    divQuestion.appendChild(question);
    divQuestion.appendChild(image);
    divQuestion.appendChild(answerButtons);
    button1.addEventListener("click", function () {
            if (currentquestion.answers[0].correct) {
                console.log("correct");
                score++;
            }
            else {
                console.log("incorrect");
            }
        nextQuestion();
        }
    );
    button2.addEventListener("click", function () {
            if (currentquestion.answers[1].correct) {
                console.log("correct");
                score++;
            }
            else {
                console.log("incorrect");
            }
        nextQuestion();
        }
    );
    button3.addEventListener("click", function () {
            if (currentquestion.answers[2].correct) {
                console.log("correct");
                score++;
            }
            else {
                console.log("incorrect");
            }
        nextQuestion();
        }

    );
    button4.addEventListener("click", function () {
            if (currentquestion.answers[3].correct) {
                console.log("correct");
                score++;
            }
            else {
                console.log("incorrect");
            }
        nextQuestion();
        }
    );

    return divQuestion;

}
function nextQuestion() {
    cursor++;
    if (cursor === questions.length) {
        document.getElementsByClassName("question-section")[0].remove();
        const divScore = document.createElement("div");
        divScore.classList.add("score-section");
        const scoreTitle = document.createElement("h1");
        scoreTitle.classList.add("text-dark");
        scoreTitle.textContent = userName + ", votre score est de : " + score + " / " + questions.length;
        const scoreText = document.createElement("p");
        scoreText.classList.add("text-muted");
        scoreText.textContent = "Vous pouvez recommencer le quiz en cliquant sur le bouton ci-dessous";
        const restartButton = document.createElement("button");
        restartButton.classList.add("btn-restart");
        restartButton.textContent = "Recommencer ";
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-redo");
        restartButton.appendChild(icon);
        divScore.appendChild(scoreTitle);
        divScore.appendChild(scoreText);
        divScore.appendChild(restartButton);
        bodyContainer.appendChild(divScore);
        restartButton.addEventListener("click", function () {
            document.getElementsByClassName("score-section")[0].remove();
            cursor = 0;
            score = 0;
            bodyContainer.innerHTML = "";
            bodyContainer.appendChild(renderQuestion(questions[cursor]));
        });
        return;
    }
    document.getElementsByClassName("question-section")[0].remove();
    bodyContainer.appendChild(renderQuestion(questions[cursor]));
}




