import { delay } from "./apiUtils";
import { people } from "../mockData";
import { nanoid } from "@reduxjs/toolkit";

async function getPeople() {
  await delay(2000);
  // api call goes here
  return Promise.resolve(people);
}

async function savePerson(person) {
  // send to server here
  const revievedPerson = person.id
    ? person
    : {
        ...person,
        id: nanoid(),
      };
  return Promise.resolve(revievedPerson);
}

export { getPeople, savePerson };
