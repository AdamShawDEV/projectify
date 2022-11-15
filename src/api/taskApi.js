import { delay } from "./apiUtils";
import { tasks } from "../mockData";
import { nanoid } from "@reduxjs/toolkit";

async function getTasks() {
  await delay(2000);
  // api call goes here
  return Promise.resolve(tasks);
}

async function saveTask(task) {
  // send to server here
  const revievedTask = task.id
    ? task
    : {
        ...task,
        id: nanoid(),
      };
  return Promise.resolve(revievedTask);
}

export { getTasks, saveTask };
