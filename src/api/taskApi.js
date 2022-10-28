import { delay } from "./apiUtils";
import { tasks } from "../mockData";
import { nanoid } from "@reduxjs/toolkit";

async function getTasks() {
  await delay(2000);
  // api call goes here
  return Promise.resolve(tasks);
}

async function saveTask(taskAndProjectId) {
  // send to server here
  const revievedTask = taskAndProjectId.task.id
    ? taskAndProjectId.task
    : {
        ...taskAndProjectId.task,
        id: nanoid(),
      };
  return Promise.resolve({
    task: revievedTask,
    projectId: taskAndProjectId.projectId,
  });
}

export { getTasks, saveTask };
