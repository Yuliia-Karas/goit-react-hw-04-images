import React from 'react';
import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

class Loader extends React.Component {
  render() {
    return (
      <div className={css.loader}>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />{' '}
      </div>
    );
  }
}

export default Loader;
