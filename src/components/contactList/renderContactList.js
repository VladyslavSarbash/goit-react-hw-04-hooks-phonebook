import PropTypes from 'prop-types';

function RenderContactList({ contacts, filter, deleteContact }) {
  const searchFilter = contacts.filter(({ name }) => {
    const lowerValue = filter.toLowerCase();
    return name.toLowerCase().includes(lowerValue);
  });

  return (
    <div>
      <ul>
        {contacts.length === 0 ? (
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
                  onClick={() => deleteContact(id)}
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

export default RenderContactList;

RenderContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
