import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import LoaderSpinner from "./components/Loader";
import { getLoading } from "./redux/contacts/contacts-selectors";

export default function App() {
  const isLoading = useSelector(getLoading);
  return (
    <div className="contaiter">
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <LoaderSpinner />}

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
