import { div, p, span } from "~utils/vDom";
import ReactiveComponent from "~utils/ReactiveComponent";
import store from '~store';

class ScoreBoard extends ReactiveComponent {
  constructor() {
    super({
      store,
    });
    this.isMount = false;
    this.$seconds = span();
    this.$score = span();
  }

  render() {
    const { $seconds, $score } = this;

    $seconds.textContent = store.state.seconds + "초";
    $score.textContent = store.state.score + "점";

    if (!this.isMount) {
      this.isMount = true;
      return (
				div({}, [
					p("남은 시간 : ", $seconds), 
					p("점수 : ", $score)]
				)
			)
    }
  }
}

export default ScoreBoard;
