import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
  };

  render() {
    const { contacts, filter } = this.props;
    const searchFilter = contacts.filter(({ name }) => {
      const lowerValue = filter.toLowerCase();
      return name.toLowerCase().includes(lowerValue);
    });

    return (
      <div>
        <ul>
          {this.props.contacts.length === 0 ? (
            <h2>No contacts</h2>
          ) : (
            searchFilter.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  {name}: {number}
                  <button
                    className="item-list"
                    id={id}
                    type="button"
                    onClick={() => this.props.deleteContact(id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default RenderContactList;
