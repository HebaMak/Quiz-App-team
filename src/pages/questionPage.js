'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  GIVE_UP_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { result } from '../views/result.js';


import { quizData } from '../data.js';

import { showScore } from '../views/score.js';
import {
  changeGiveUPButtonToNext,
  changeNextButtonToGiveUp,
} from '../utilities/nextAndGiveUpButtonChange.js';

const questionsLength = quizData.questions.length;
export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const nextElement = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  const giveUpElement = document.getElementById(GIVE_UP_BUTTON_ID);
  const timerGiveup = changeNextButtonToGiveUp(nextElement, giveUpElement);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(
      key,
      answerText,
      currentQuestion,
      timerGiveup
    );
    answersListElement.appendChild(answerElement);
  }
  showScore(quizData.currentScore);

  giveUpElement.addEventListener('click', giveUp);

  nextElement.addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  if (quizData.currentQuestionIndex < quizData.questions.length) {
    initQuestionPage();

    

    localStorage.setItem('currentScore', quizData.currentScore);
    localStorage.setItem('currentIndex', quizData.currentQuestionIndex);
  } else {
    result();
    localStorage.removeItem('currentIndex');
    localStorage.removeItem('currentScore');
  }
};

const giveUp = () => {
  const correct = document.getElementById(
    quizData.questions[quizData.currentQuestionIndex].correct
  );
  Array.from(document.getElementsByClassName('answer-item')).forEach(
    (answer) => {
      answer.classList = 'answer-item';
      answer.style.pointerEvents = 'none';
    }
  );
  correct.classList.add('right');
  correct.style.pointerEvents = 'none';
  const nextElement = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  const giveUpElement = document.getElementById(GIVE_UP_BUTTON_ID);
  changeGiveUPButtonToNext(nextElement, giveUpElement);
};

export const continueQuizApp = () => {
  quizData.currentQuestionIndex = JSON.parse(
    localStorage.getItem('currentIndex')
  );
  quizData.currentScore = JSON.parse(localStorage.getItem('currentScore'));

  initQuestionPage();
};
