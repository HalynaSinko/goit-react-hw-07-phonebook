// import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;

export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  console.log(state);
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return allContacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
