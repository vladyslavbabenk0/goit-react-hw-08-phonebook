import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        number,
      })
    );

    setContactName('');
    setNumber('');
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={contactName}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters"
            required
            placeholder="Michael Jordan"
          />
        </label>

        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can start with +"
            required
            placeholder="+380 000 000 000"
          />
        </label>

        <button className={styles.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
