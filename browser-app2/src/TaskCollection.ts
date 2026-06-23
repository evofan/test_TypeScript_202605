import { Task, Status, TaskObject } from "./Task";

const STORAGE_KEY = "TASKS";

export class TaskCollection {
  // private tasks: Task[] = [];
  private readonly storage;
  private tasks;

  constructor() {
    this.storage = window.localStorage;
    console.log(this.storage);
    this.tasks = this.getStoredTasks();
  }

  add(task: Task) {
    this.tasks.push(task);
    this.updateStorage();
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter(({ id }) => id !== task.id);
  }

  find(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  update(task: Task) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) return task;
      return item;
    });
    this.updateStorage();
  }

  filter(filterStatus: Status) {
    return this.tasks.filter(({ status }) => status === filterStatus);
  }

  private updateStorage() {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
  }

  // private getStoredTasks(): Task[] {
  private getStoredTasks() {
    const jsonString = this.storage.getItem(STORAGE_KEY);
    if (!jsonString) {
      return [];
    }
    // console.log(jsonString);
    // return [];
    try {
      // const storedTasks: any[] = JSON.parse(jsonString);
      const storedTasks = JSON.parse(jsonString);

      assertIsTaskObjects(storedTasks);

      const tasks = storedTasks.map((task) => new Task(task));
      console.log(tasks);
      return tasks;
    } catch {
      this.storage.removeItem(STORAGE_KEY);
      return [];
    }
  }
}

function assertIsTaskObjects(value: any): asserts value is TaskObject[] {
  if (!Array.isArray(value) || !value.every((item) => Task.validate(item))) {
    throw new Error(`引数「value」は TaskObject[]型と一致しません。`);
  }
}
