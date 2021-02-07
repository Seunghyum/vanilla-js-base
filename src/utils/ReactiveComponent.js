import Store from "~store/store.js";

class ReactiveComponent {
  constructor(props = {}) {
    let self = this;

    this.render = this.render || function () {};
    if (props.store instanceof Store) {
      props.store.events.subscribe("stateChange", (state) =>
        self.render(state)
      );
    }
  }
}

export default ReactiveComponent;
