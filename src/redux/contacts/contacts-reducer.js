import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
} from "./contacts-actions";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//     loading: false,
//     error: null,
//   },
// };
// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [removeContactError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
  [addContactRequest]: () => null,
  [removeContactRequest]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
