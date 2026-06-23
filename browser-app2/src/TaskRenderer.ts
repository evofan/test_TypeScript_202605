import { Task } from "./Task";
import dragula from "dragula";
import { Status, statusMap } from "./Task";
import { TaskCollection } from "./TaskCollection";

export class TaskRenderer {
  //constructor(private readonly todoList: HTMLElement) {}

  constructor(
    private readonly todoList: HTMLElement,
    private readonly doingList: HTMLElement,
    private readonly doneList: HTMLElement,
  ) {}

  renderAll(taskCollection: TaskCollection) {
    const todoTasks = this.renderList(
      taskCollection.filter(statusMap.todo),
      this.todoList,
    );
    const doingTasks = this.renderList(
      taskCollection.filter(statusMap.doing),
      this.todoList,
    );
    const doneTasks = this.renderList(
      taskCollection.filter(statusMap.done),
      this.todoList,
    );
    return [...todoTasks, ...doingTasks, ...doneTasks];
  }

  private renderList(tasks: Task[], listEl: HTMLElement) {
    if (tasks.length === 0) return [];

    const taskList: Array<{ task: Task; deleteButtonEl: HTMLElement }> = [];

    tasks.forEach((task) => {
      const { taskEl, deleteButtonEl } = this.render(task);

      listEl.append(taskEl);
      taskList.push({ task, deleteButtonEl });
    });

    return taskList;
  }

  append(task: Task) {
    // const taskEl = this.render(task);
    const { taskEl, deleteButtonEl } = this.render(task);

    this.todoList.append(taskEl);
    return { deleteButtonEl };
  }

  private render(task: Task) {
    // <div class="taskItem">
    // <span>タイトル</span>
    // <button>削除</button>
    // </div>

    const taskEl = document.createElement("div");
    const spanEl = document.createElement("span");
    const deleteButtonEl = document.createElement("button");

    taskEl.id = task.id;
    taskEl.classList.add("task-item");

    spanEl.textContent = task.title;
    deleteButtonEl.textContent = "削除";

    taskEl.append(spanEl, deleteButtonEl);

    return { taskEl, deleteButtonEl };
  }

  remove(task: Task) {
    const taskEl = document.getElementById(task.id);
    if (!taskEl) {
      return;
    }

    // this.todoList.removeChild(taskEl);
    if (task.status === statusMap.todo) {
      this.todoList.removeChild(taskEl);
    }

    if (task.status === statusMap.doing) {
      this.doingList.removeChild(taskEl);
    }

    if (task.status === statusMap.done) {
      this.doneList.removeChild(taskEl);
    }
  }
  subscribeDragAndDrop(
    onDrop: (el: Element, sibling: Element | null, newStatus: Status) => void,
  ) {
    // dragula([this.todoList, this.doingList, this.doneList]).on(
    //   "drop",
    //   (el, target, source, sibling) => {
    //     console.log(el);
    //     console.log(target);
    //     console.log(source);
    //     console.log(sibling);
    //   },
    // );
    dragula([this.todoList, this.doingList, this.doneList]).on(
      "drop",
      (el, target, _source, sibling) => {
        let newStatus: Status = statusMap.todo;
        if (target.id === "doingList") newStatus = statusMap.doing;
        if (target.id === "doneList") newStatus = statusMap.done;

        onDrop(el, sibling, newStatus);
      },
    );
  }

  getId(el: Element) {
    return el.id;
  }
}
