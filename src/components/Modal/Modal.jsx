import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal(props) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props]);

  const handleCloseClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      props.onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleCloseClick}>
      <div className={css.modal}>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
