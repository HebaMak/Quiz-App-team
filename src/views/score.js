import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
export const showScore = (overallScore) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);

  const scoreDiv = document.createElement('div');
  scoreDiv.classList.add('score-container');
  const scoreNum = document.createElement('h1');
  scoreNum.classList.add('score-num');
  scoreNum.textContent = overallScore;
  userInterface.appendChild(scoreDiv);
  scoreDiv.appendChild(scoreNum);
};
