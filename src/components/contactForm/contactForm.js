import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    name: '',
    number: '',
  };

  checkContact = () => {
    const { contacts } = this.props;
    contacts.find(({ name }) => {
      return name === this.state.name;
    })
      ? alert(`${this.state.name} is already in contacts.`)
      : this.newContact();
  };

  newContact = () => {
    const { name, number } = this.state;
    const newObj = { name, number, id: shortid.generate() };

    this.props.onSubmit(newObj);
  };

  formInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.checkContact();

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Kris Evans"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.formInput}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="555-55-55"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.formInput}
          />
        </label>
        <button className="submit_form" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
