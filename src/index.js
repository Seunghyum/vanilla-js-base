import "./styles/reset.css";
import "./styles/index.css";

import { a } from "~utils/vDom.js";

window.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.appendChild(
    a(
      {
        href: "/",
        className: "test",
      },
      "hello"
    )
  );
});
