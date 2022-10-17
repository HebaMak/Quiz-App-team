import { quizData } from '../data.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { initWelcomePage } from '../pages/welcomePage.js';

export const result = () => {
  // RESET THE DOM--------------------------------------
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  // ====================================

  // CREATION OF RESULT DOM ELEMENTS ----------------

  const result = document.createElement('div');
  const percentage = document.createElement('div');
  const resultNum = document.createElement('div');
  const numContainer = document.createElement('div');
  const numContainer2 = document.createElement('div');
  const score = document.createElement('img');
  const wrongAnswersNum = document.createElement('h1');
  const rightAnswersNum = document.createElement('h1');
  const percentageNum = document.createElement('h1');
  const check = document.createElement('span');
  const restart = document.createElement('button');
  const check2 = document.createElement('span');
  // =================================================

  // ADD TEXT-CONTENT----------------------

  let rightAnswers = quizData.currentScore;

  let wrongAnswers = quizData.questions.length - quizData.currentScore;
  wrongAnswersNum.textContent = rightAnswers;

  rightAnswersNum.textContent = wrongAnswers;
  percentageNum.textContent = ` ${
    (rightAnswers / quizData.questions.length).toFixed(2) * 100
  }% `;
  check.textContent = 'check';
  check2.textContent = 'close';
  restart.textContent = 'refresh';
  // ================================

  // ADDITION OF DIFFERENT ATTRIBUTES -----------------
  score.classList.add('score');
  numContainer.classList.add('wrong-answers');
  numContainer2.classList.add('right-answers');
  percentage.classList.add('percentage');
  resultNum.classList.add('class', 'resultNum');
  percentageNum.classList.add('class', 'percentageNum');
  wrongAnswersNum.classList.add('answer-numbers');
  rightAnswersNum.classList.add('answer-numbers', 'third');
  result.classList.add('result');
  check.classList.add('material-symbols-outlined');
  restart.classList.add('material-symbols-outlined', 'restart');
  check2.classList.add('material-symbols-outlined', 'second');
  score.setAttribute(
    'src',
    'https://media.istockphoto.com/vectors/sketch-icon-in-black-trophy-vector-id910592448?k=20&m=910592448&s=170667a&w=0&h=m33c9xZUFuqyrBuDBxbPvJrr0EOntg-YlIdaNkUIW_g='
  );
  // =========================================

  // APPENDING OF CHILDREN  -------------------------------------
  userInterface.appendChild(result);
  resultNum.appendChild(numContainer2);
  resultNum.appendChild(percentage);
  resultNum.appendChild(numContainer);
  percentage.appendChild(percentageNum);
  result.appendChild(score);
  numContainer.appendChild(check);
  numContainer2.appendChild(check2);
  numContainer.appendChild(wrongAnswersNum);
  numContainer2.appendChild(rightAnswersNum);
  result.appendChild(resultNum);
  result.appendChild(restart);
  //  =================================================================================================================

  restart.addEventListener('click', restartPage);
};
const restartPage = () => {
  quizData.currentQuestionIndex = 0;
  quizData.currentScore = 0;
  localStorage.removeItem('currentScore');

  initWelcomePage();
};
