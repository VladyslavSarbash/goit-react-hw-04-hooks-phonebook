import PropTypes from 'prop-types';

function Filter({ filterInput, filter }) {
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

export default Filter;

Filter.propTypes = {
  filterInput: PropTypes.func,
  Filter: PropTypes.string,
};
