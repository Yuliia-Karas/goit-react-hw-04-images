import React from 'react';
import css from './Searchbar.module.css';

class Searchbar extends React.Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.props.onSubmit}>
          <button type="submit" className={css.button}>
            <span className={css['button-label']}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
