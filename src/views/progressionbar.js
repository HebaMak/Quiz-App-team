import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';

export const progressionBar = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);

  const progressionDiv = document.createElement('div');
  progressionDiv.classList.add('progress-container');
  const progress = document.createElement('div');
  progress.classList.add('progress');

  userInterface.appendChild(progressionDiv);
  progressionDiv.appendChild(progress);
  let num = 43;

  num *= quizData.currentQuestionIndex;

  progress.style.width = num + 'px';
};
