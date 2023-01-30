import React, { Component } from 'react';
import style from './Searchbar.module.css';
// import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }
  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={handleSubmit}>
          <button className={style.SearchFormButton} type="submit">
            <span>Search</span>
          </button>

          <input
            // class="input"
            className={style.SearchFormInput}
            type="text"
            name="search"
            value={search}
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;

// SearchForm.PropTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
