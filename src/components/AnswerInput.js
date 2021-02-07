import { input } from "~utils/vDom";

function AnswerInput({ onKeyUp }) {
  return input({
    type: "text",
    autofocus: "",
    style: `
      border: 1px solid red;
    `,
    onkeyup: onKeyUp,
  });
}

export default AnswerInput;
