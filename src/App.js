import './App.css';
import { useState, useEffect } from 'react';
import RenderContactList from './components/ContactList/renderContactList';
import Filter from './components/Filter/filter';
import ContactForm from './components/ContactForm/contactForm';

const useLocalStorage = key => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultContacts;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts');

  const [filter, setFilter] = useState('');

  const filterInput = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  const onSubmit = dataObj => {
    setContacts([dataObj, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(i => i.id !== id));
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filterInput={filterInput} filter={filter} />
      <RenderContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </section>
  );
}

export default App;
