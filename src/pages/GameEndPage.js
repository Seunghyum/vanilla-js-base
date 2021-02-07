import { div, p } from "~utils/vDom";

class GameEndPage {
  render() {
    return div(
      { className: "board" },
      p({ className: "game-score" }, `GameEndPage`)
    );
  }
}

export default GameEndPage;
