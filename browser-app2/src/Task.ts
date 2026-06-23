import { v4 as uuid, validate } from "uuid";

// enum Status {
//   Todo = "TODO",
//   Doing = "DOING",
//   Done = "DONE",
// }

export const statusMap = {
  todo: "TODO",
  doing: "DOING",
  done: "DONE",
} as const;
export type Status = (typeof statusMap)[keyof typeof statusMap];

export type TaskObject = {
  id: string;
  title: string;
  status: Status;
};

export class Task {
  readonly id;
  title;
  // status: Status;
  status;

  // constructor(properties: { title: string }) {
  constructor(properties: { id?: string; title: string; status?: Status }) {
    // this.id = uuid();
    this.id = properties.id || uuid();
    this.title = properties.title;
    this.status = statusMap.todo;
    this.status = properties.status || statusMap.todo;
  }

  update(properties: { title?: string; status?: Status }) {
    this.title = properties.title || this.title;
    this.status = properties.status || this.status;
  }

  static validate(value: any) {
    if (!value) return false;
    if (!validate(value.id)) return false;
    if (!value.title) return false;
    if (!Object.values(statusMap).includes(value.status)) return false;

    return true;
  }
}
