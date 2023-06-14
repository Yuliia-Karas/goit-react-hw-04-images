import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function Searchbar(props) {
  const [name, setName] = useState('');

  const handleChange = e => {
    const { value } = e.target;

    setName(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast.warn('Please enter text for search');
      return;
    }
    props.onSubmit(name);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css['button-label']}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
