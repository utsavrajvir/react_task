import { createStore, compose } from "redux";
import { ADD_USER } from "./constants";

const initialState = {
  userList: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      let value = {
        ...state,
        userList: [
          ...action.existingList,
          {
            firstName: action.item.firstName,
            lastName: action.item.lastName,
          },
        ],
      };
      return value;
    default:
      return state;
  }
};
const store = createStore(
  storeReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
