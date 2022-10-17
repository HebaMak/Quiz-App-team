'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  const currentQuestion = localStorage.getItem('currentIndex');

  if (currentQuestion) {
    quizData.currentQuestionIndex = currentQuestion;
    initQuestionPage();
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
