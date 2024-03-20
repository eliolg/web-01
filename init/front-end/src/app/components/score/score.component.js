// TODO #import-html: use ES default imports to import game.html as template
import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";

import template from "./score.component.html";
import "./score.component.css";


// TODO #export-functions: remove the IIFE

  // TODO #export-functions: export function ScoreComponent
  // TODO #class: use the ES6 class keyword
  /* class ScoreComponent constructor */
  export class ScoreComponent extends Component{

    constructor(){
      super(template);
      const params = parseUrl();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }

    init() {
      document.getElementById("name").innerText = this.name;
      document.getElementById("size").innerText = this.size;
      document.getElementById("time").innerText = this.time;
    };
    // TODO #extends: call super(template)
    
    // TODO #import-html: assign template to this.template

  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.

  // TODO #class: turn function into a method of ScoreComponent
  /* method ScoreComponent.init */
  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };

}
