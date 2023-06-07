import React from 'react';
// import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };
  handleCloseClick = () => {
    this.props.onClose();
  };

  render() {
    // debugger;
    return (
      <div className={css.overlay} onClick={this.handleCloseClick}>
        <div className={css.modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;
