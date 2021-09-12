import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;

export const getContacts = (state) => state.contacts.items;

export const getLoading = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
