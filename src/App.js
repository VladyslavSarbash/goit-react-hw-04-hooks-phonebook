import './App.css';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import RenderContactList from './components/contactList/renderContactList';
import Filter from './components/filter/filter';
import ContactForm from './components/contactForm/contactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const getContactsJSON = localStorage.getItem('contacts');
    const contactsJSON = JSON.parse(getContactsJSON);

    if (contactsJSON) {
      this.setState({
        contacts: contactsJSON,
      });
    }
  }

  componentDidUpdate() {
    const setContactsJSON = JSON.stringify(this.state.contacts);
    localStorage.setItem('contacts', setContactsJSON);
  }

  filterInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = dataObj => {
    const { contacts } = this.state;
    this.setState({ contacts: [dataObj, ...contacts] });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(i => i.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filterInput={this.filterInput} filter={filter} />
        <RenderContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </section>
    );
  }
}
export default App;
