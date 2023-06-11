import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends React.Component {
  state = {
    largeImageView: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ largeImageView: !prevState.largeImageView }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } =
      this.props;
    return (
      <>
        <li
          className={css.imageGalleryItem}
          key={id}
          onClick={this.toggleModal}
        >
          <img
            className={css['imageGalleryItem-image']}
            src={webformatURL}
            alt={tags}
          />
        </li>
        {this.state.largeImageView && (
          <Modal src={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
