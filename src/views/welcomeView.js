'use strict';

import { START_QUIZ_BUTTON_ID, CONTINUE_QUIZ } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <div class='welcome-page'>
      <div class="welcome-page-item">
          <h1>Welcome</h1>
          <button class="btn mt-4 " id="${START_QUIZ_BUTTON_ID}">play</button>
      </div>
      <div class="welcome-page-item">
        <img class="welcome-page-img " src="./public/assets/cube.png" alt="">    
      </div>
    <div>
  `;
  return element;
};
