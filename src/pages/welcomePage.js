'use strict';

import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  CONTINUE_QUIZ,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage, continueQuizApp } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};
