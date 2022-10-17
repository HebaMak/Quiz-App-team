'use strict';

import { GIVE_UP_BUTTON_ID ,USER_INTERFACE_ID } from '../constants.js';
import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
// import { progressionBar } from './progressionBar.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('container');

  // progressionBar(USER_INTERFACE_ID,quizData.currentQuestionIndex);

const userParent = document.getElementById(USER_INTERFACE_ID );
  const progressionDiv = document.createElement('div');
  progressionDiv.classList.add('progress-container');
  const progress = document.createElement('div');
  progress.classList.add('progress');

  userParent.appendChild(progressionDiv);
  progressionDiv.appendChild(progress);
  let num = 43;

  num *= quizData.currentQuestionIndex;

  progress.style.width =` ${num}px`;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1 class='question'>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

  <button id="${NEXT_QUESTION_BUTTON_ID}" class="next-btn">
     ${'Next question'}
    </button>

    <button id=${GIVE_UP_BUTTON_ID} class='give-up-button'>Give Up</button>   
 
   
  `;

  return element;
};
