'use strict';

import { GIVE_UP_BUTTON_ID } from '../constants.js';
import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { progressionBar } from './progressionBar.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('container');

  progressionBar();
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
