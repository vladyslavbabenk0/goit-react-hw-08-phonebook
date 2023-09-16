import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectStatusFilter } from 'redux/selectors';

import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className={styles.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={styles.contactItem}>
              <p className={styles.contactText}>
                {name}: {number}
              </p>
              <button
                className={styles.contactListBtn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func, 
};
