import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    filterInput: PropTypes.func,
    Filter: PropTypes.string,
  };

  render() {
    const { filterInput, filter } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={filterInput}
        />
      </label>
    );
  }
}

export default Filter;
