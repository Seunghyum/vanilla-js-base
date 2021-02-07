export default {
  setSeconds(context, payload) {
    context.commit("setSeconds", payload);
  },
  setScore(context, payload) {
    context.commit("setScore", payload);
  },
};
