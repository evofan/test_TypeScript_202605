// import { sum } from "./sum";

// console.log(sum(1, 2));

import { EventLListener } from "./EventListeners";
import { Task, Status, statusMap} from "./Task";
import { TaskCollection } from "./TaskCollection";
import { TaskRenderer } from "./TaskRenderer";

class Application {
  private readonly eventListener = new EventLListener();
  private readonly taskCollection = new TaskCollection();
  private readonly taskRenderer = new TaskRenderer(
    document.getElementById("todoList") as HTMLElement,
    document.getElementById("doingList") as HTMLElement,
    document.getElementById("doneList") as HTMLElement,
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

    const taskItems = this.taskRenderer.renderAll(this.taskCollection);
    const createForm = document.getElementById("createForm") as HTMLElement;
    const deleteAllDoneTaskButton = document.getElementById(
      "deleteAllDoneTask",
    ) as HTMLElement;

    taskItems.forEach(({ task, deleteButtonEl }) => {
      this.eventListener.add(task.id, "clcick",deleteButtonEl,()=> this.handleClickDeleteTask(task))
    });

    this.eventListener.add(
      "submit-handler",
      "submit",
      createForm,
      this.handleSubmit,
    );

    this.eventListener.add(
      "click-handler",
      "click",
      deleteAllDoneTaskButton,
      this.handleClickDeleteAllDoneTasks,
    );
    this.taskRenderer.subscribeDragAndDrop(this.handleDropAndDrop);
  }

  private handleDropAndDrop = (
    el: Element,
    sibling: Element | null,
    newStatus: Status,
  ) => {
    const taskId = this.taskRenderer.getId(el);

    if (!taskId) {
      return;
    }

    // console.log(taskId);

    // console.log(newStatus);

    const task = this.taskCollection.find(taskId);

    if (!task) return;

    task.update({ status: newStatus });
    this.taskCollection.update(task);

    console.log(sibling);
  };

  private executeDeleteTask = (task: Task) => {
    this.eventListener.remove(task.id);
    this.taskCollection.delete(task);
    this.taskRenderer.remove(task);
  };

  private handleClickDeleteAllDoneTasks = () => {
    if (!window.confirm("DONE のタスクを一括削除してよろしいですか？")) return;

    console.log("delete");

    const doneTasks = this.taskCollection.filter(statusMap.done);

    console.log(doneTasks);
    doneTasks.forEach((task) => this.executeDeleteTask(task));
  };

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

    // this.taskRenderer.append(task);
    const { deleteButtonEl } = this.taskRenderer.append(task);

    this.eventListener.add(task.id, "click", deleteButtonEl, () =>
      this.handleClickDeleteTask(task),
    );

    titleInput.value = "";
  };

  private handleClickDeleteTask = (task: Task) => {
    if (!window.confirm(`「${task.title}を削除してもよろしいですか？」`)) {
      return;
    }
    console.log(task);
    // this.eventListener.remove(task.id); // イベントリスナーから削除
    // this.taskCollection.delete(task); // タスクコレクションから削除
    // console.log(this.taskCollection);
    // this.taskRenderer.remove(task); // 画面からの削除
    this.executeDeleteTask(task);
  };
}

window.addEventListener("load", () => {
  const app = new Application();
  app.start();
});
