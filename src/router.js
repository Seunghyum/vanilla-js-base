import GameStartPage from "~src/pages/GameStartPage";
import GameEndPage from "~src/pages/GameEndPage";
import { $ } from "~utils/domHelper";

const $app = $("#app");

const routes = {
  "/": () => new GameStartPage(),
  "/score": () => new GameEndPage(),
};

const renderHTML = (route) => {
  $app.innerHTML = "";
  $app.appendChild(route.render());
};

export const initRoute = () => {
  renderHTML(getPath());
};

const getPath = () => routes[window.location.pathname]();
