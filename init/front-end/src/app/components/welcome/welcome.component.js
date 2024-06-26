// TODO #import-html: use ES default imports to import welcome.html as template
import { Component } from "../../scripts/component";

import template from "../welcome/welcome.component.html";
import "./welcome.component.css";
// TODO #export-functions: remove the IIFE

  // TODO #export-functions: export function WelcomeComponent
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export class WelcomeComponent extends Component{

    constructor(){
      super(template);
    }
    // TODO #extends: call super(template)
    // TODO #import-html: assign template to this.template
  

  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  // TODO #class: turn function into a method of WelcomeComponent
  /* method WelcomeComponent.init */
  init() {
    var form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
      // TODO #arrow-function: use arrow function instead.
      (event) => {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          var name = event.srcElement.querySelector("#nickname").value;
          var size = parseInt(event.srcElement.querySelector("#size").value);

          this._startGame(name, size);
        }
      },
      false
    );

    return this;
  };

  // TODO #class: turn function into a method of WelcomeComponent
  _startGame(name, size) {
    // TODO #spa: replace with './#game'
    let gamePage = "./#game";
    // TODO #template-literals:  use template literals (backquotes)
    window.location = `${gamePage}?name=${name}&size=${size}`;
  }

}
