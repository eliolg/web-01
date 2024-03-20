// TODO #import-html: use ES default imports to import game.html as template
import template from "./game.component.html";
import { Component } from "../../scripts/component";
import { parseUrl } from "../../scripts/utils"
import { CardComponent } from "./card/card.component.js";
import "./game.component.css";


// TODO #export-functions: remove the IIFE
let environment = {
  api: {
    host: "http://localhost:8081",
  },
};



// TODO #export-functions: export function GameComponent
// TODO #class: use the ES6 class keyword
// TODO #extends: extend Component
/* class GameComponent constructor */
export class GameComponent extends Component {
  // TODO #extends: call super(template)
  // gather parameters from URL
  constructor() {
    super(template);
    const params = parseUrl();
    // save player name & game ize
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }



  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.init */
  async init() {
    // fetch the cards configuration from the server
    this._config = await this.fetchConfig();
    this._boardElement = document.querySelector(".cards");

    // create cards out of the config
    this._cards = [];
    // TODO #functional-programming: use Array.map() instead.
    for (let i in this._config.ids) {
      this._cards[i] = new CardComponent(this._config.ids[i]);
    }

    // TODO #functional-programming: use Array.forEach() instead.
    // TODO #let-const: replace let with let.
    for (let i in this._cards) {
      let card = this._cards[i];
      this._boardElement.appendChild(card.getElement());

      card.getElement().addEventListener(
        "click",
        () => {
          this._flipCard(card);
        }
      );

      // TODO #let-const: extract function _appendCard (ie: copy its body here and remove the function)
    };

    this.start();
  };
  // TODO #class: turn function into a method of GameComponent

  /* method GameComponent._appendCard */

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.start */
  start() {
    this._startTime = Date.now();
    let seconds = 0;
    // TODO #template-literals:  use template literals (backquotes)
    document.querySelector("nav .navbar-title").textContent =
      `Player: ${this._name} . Elapsed time: ${seconds++}`;

    this._timer = setInterval(
      // TODO #arrow-function: use arrow function instead.
      () => {
        // TODO #template-literals:  use template literals (backquotes)
        document.querySelector("nav .navbar-title").textContent =
          `Player: ${this._name} . Elapsed time: ${seconds++}`;
      },
      1000
    );
  };

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.fetchConfig */
  async fetchConfig() {

    const response = await fetch(`${environment.api.host}/board?size=${this._size}`);

    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error("Erreur de get");
    }
  };

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.goToScore */
  goToScore() {
    let timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);

    setTimeout(
      // TODO #arrow-function: use arrow function instead.
      () => {
        // TODO #spa: replace with './#score'
        let scorePage = "./#score";
        // TODO #template-literals:  use template literals (backquotes)
        window.location =
          `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
      },
      750
    );
  };

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent._flipCard */
  _flipCard(card) {
    if (this._busy) {
      return;
    }

    if (card.flipped) {
      return;
    }

    // flip the card
    card.flip();

    // if flipped first card of the pair
    if (!this._flippedCard) {
      // keep this card flipped and wait for the second card of the pair
      this._flippedCard = card;
    } else {
      // second card of the pair flipped...

      // if cards are the same
      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;

        // reset flipped card for the next turn.
        this._flippedCard = null;

        if (this._matchedPairs === this._size) {
          this.goToScore();
        }
      } else {
        this._busy = true;

        // cards did not match
        // wait a short amount of time before hiding both cards
        setTimeout(
          // TODO #arrow-function: use arrow function instead.
          () => {
            // hide the cards
            this._flippedCard.flip();
            card.flip();
            this._busy = false;

            // reset flipped card for the next turn.
            this._flippedCard = null;
          },
          500
        );
      }
    }
  };
}



