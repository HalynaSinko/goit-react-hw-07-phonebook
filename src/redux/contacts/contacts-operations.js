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
} from "./contacts-actions";
import * as contactsApi from "../../services/contacts-api";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await contactsApi.fetchAllContacts();

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    dispatch(addContactRequest());

    try {
      const { data } = await contactsApi.addNewContact({ name, number });
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

const removeContact = (contactId) => async (dispatch) => {
  dispatch(removeContactRequest());

  try {
    await contactsApi.removeContactById(contactId);
    dispatch(removeContactSuccess(contactId));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, removeContact };
