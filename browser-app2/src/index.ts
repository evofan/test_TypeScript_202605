// import { sum } from "./sum";

// console.log(sum(1, 2));

import { EventLListener } from "./EventListeners";

class Applicatio {
  start() {
    console.log("hello world");

    const eventListener = new EventLListener();

    const button = document.getElementById("deleteAllDoneTask");

    if (!button) {
      return;
    }

    console.log(button);

    eventListener.add("sample", "click", button, () => alert("clicked"));

    eventListener.remove("sample");
  }

}

window.addEventListener("load", () => {
  const app = new Applicatio();
  app.start();
});
