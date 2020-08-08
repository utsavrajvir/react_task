import { ADD_USER } from "./constants";

export function addUser(item, existingList) {
  return {
    type: ADD_USER,
    item,
    existingList,
  };
}
