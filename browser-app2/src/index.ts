// import { sum } from "./sum";

// console.log(sum(1, 2));

import { EventLListener } from "./EventListeners";
import { Task } from "./Task";
import { TaskCollection } from "./TaskCollection";
import { TaskRenderer } from "./TaskRenderer";

class Application {
  private readonly eventListener = new EventLListener();
  private readonly taskCollection = new TaskCollection();
  private readonly taskRenderer = new TaskRenderer(
    document.getElementById("todoList") as HTMLElement
  );

  start() {
    console.log("hello world");

    // const eventListener = new EventLListener();
    // const button = document.getElementById("deleteAllDoneTask");

    // if (!button) {
    //   return;
    // }

    // console.log(button);
    // eventListener.add("sample", "click", button, () => alert("clicked"));
    // eventListener.remove("sample");

    const createForm = document.getElementById("createForm") as HTMLElement;

    this.eventListener.add(
      "submit-handler",
      "submit",
      createForm,
      this.handleSubmit,
    );
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("submited!");

    const titleInput = document.getElementById("title") as HTMLInputElement;

    if (!titleInput.value) {
      return;
    }

    const task = new Task({ title: titleInput.value });
    console.log(task);

    this.taskCollection.add(task);
    console.log(this.taskCollection);

    this.taskRenderer.append(task);

    titleInput.value = "";
  };
}

window.addEventListener("load", () => {
  const app = new Application();
  app.start();
});
