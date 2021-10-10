import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function ContactForm({ contacts, onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const checkContact = () => {
    contacts.find(({ name }) => {
      return name === state.name;
    })
      ? alert(`${state.name} is already in contacts.`)
      : newContact();
  };

  const newContact = () => {
    const { name, number } = state;
    const newObj = { name, number, id: shortid.generate() };

    onSubmit(newObj);
  };

  const formInput = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const formSubmit = e => {
    e.preventDefault();
    checkContact();

    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Kris Evans"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={formInput}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={state.number}
          placeholder="555-55-55"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={formInput}
        />
      </label>
      <button className="submit_form" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
