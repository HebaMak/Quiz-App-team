'use strict';

import { quizData } from '../data.js';
import { showScore } from '../views/score.js';
/**
 * Create an Answer element
 * @returns {Element}
 */
import { changeGiveUPButtonToNext } from '../utilities/nextAndGiveUpButtonChange.js';
import { NEXT_QUESTION_BUTTON_ID, GIVE_UP_BUTTON_ID } from '../constants.js';

export const createAnswerElement = (
  key,
  answerText,
  currentQuestion,
  timerGiveup
) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${answerText};
  `;

  element.classList.add('answer-item');
  element.id = key;

  element.addEventListener('click', highlightAnswer);

  function highlightAnswer() {
    const parent = element.parentNode;
    Array.from(parent.children).forEach(
      (child) => (child.classList = 'answer-item')
    );

    element.classList.add('selected');
    currentQuestion.selected = key;

    if (currentQuestion.correct === currentQuestion.selected) {
      quizData.currentScore = quizData.currentScore += 1;

      showScore(quizData.currentScore);
    }
    if (key === currentQuestion.correct) {
      element.classList.add('right');
    } else {
      element.classList.add('wrong');
      const correct = document.getElementById(
        quizData.questions[quizData.currentQuestionIndex].correct
      );
      correct.classList.add('right');
    }
    Array.from(parent.children).forEach(
      (child) => (child.style.pointerEvents = 'none')
    );

    clearTimeout(timerGiveup);

    const nextElement = document.getElementById(NEXT_QUESTION_BUTTON_ID);
    const giveUpElement = document.getElementById(GIVE_UP_BUTTON_ID);
    changeGiveUPButtonToNext(nextElement, giveUpElement);
  }

  return element;
};
