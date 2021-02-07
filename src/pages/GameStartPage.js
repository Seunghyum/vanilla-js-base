import { div, input } from "~utils/vDom";
import ScoreBoard from "~src/components/ScoreBoard";
import store from '~store'

class GameStartPage {
  handleKeyUp(e) {
    if (e.key === "Enter") {
      console.log(e.target.value)

      store.dispatch('setScore', 100);
    }
  }

  render() {
    const { handleKeyUp } = this;
    const $ScoreBoard = new ScoreBoard().render()
    return div({ className: "board" }, [
      $ScoreBoard,
      input({
        type: "text",
        autofocus: "",
        style: `
          border: 1px solid red;
        `,
        onkeyup: handleKeyUp,
      })
    ]);
  }
}

export default GameStartPage;
