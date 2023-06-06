import React from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  state = {
    name: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ name: value.toLowerCase() });
  };

  handleSubmit = e => {
    const name = this.state.name;
    e.preventDefault();
    if (name.trim() === '') {
      toast.warn('Please enter name for search');
      return;
    }
    this.props.onSubmit(name);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css['button-label']}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
