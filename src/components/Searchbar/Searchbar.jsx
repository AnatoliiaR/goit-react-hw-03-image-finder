import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import style from './Searchbar.module.css';

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
            <span>
              <AiOutlineSearch color="black" size="2rem" />
            </span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            name="search"
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
