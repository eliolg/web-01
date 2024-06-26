// TODO #import-router: use ES named imports to import the router
import { Router } from "./app/scripts/router/router.js";
import { GameComponent } from "./app/components/game/game.component.js";
import { WelcomeComponent} from "./app/components/welcome/welcome.component.js"
import { ScoreComponent } from "./app/components/score/score.component.js";
import { NavbarComponent } from "./app/components/navbar/navbar.component.js";
import { FooterComponent } from "./app/components/footer/footer.component.js";
// TODO #import-components: use ES named imports to import WelcomeComponent, GameComponent a ScoreComponent
// TODO #import-css: use ES side-effect imports to import styles/style.css
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

customElements.define("my-navbar", NavbarComponent);
customElements.define("my-footer", FooterComponent);

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("welcome", {
    component: WelcomeComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("game", {
    component: GameComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("score", {
    component: ScoreComponent,
    // TODO #import-html: remove the templateUrl property.
  });
