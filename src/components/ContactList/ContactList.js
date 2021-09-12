import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import {
  // getIsloading,
  getVisibleContacts,
} from "../../redux/contacts/contacts-selectors";

import s from "./ContactList.module.css";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.listItem}>
      <span className={s.name}>{name}: </span>
      <span className={s.number}>{number}</span>
      <button onClick={() => onRemove(id)} className={s.btn}>
        Deleted
      </button>
    </li>
  );
};

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  // const isLoading = useSelector(getIsloading);
  console.log(contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onRemove = (id) => dispatch(contactsOperations.removeContact(id));

  if (contacts.length === 0) return null;

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
}
