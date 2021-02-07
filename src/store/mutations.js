export default {
  setSeconds(state, payload) {
    state.seconds = payload

    return state;
  },
  setScore(state, payload) {
    state.score = payload;

    return state;
  },
};
