import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) {
  const [largeImageView, setLargeImageView] = useState(false);

  const toggleModal = () => {
    setLargeImageView(!largeImageView);
  };

  return (
    <>
      <li className={css.imageGalleryItem} key={id} onClick={toggleModal}>
        <img
          className={css['imageGalleryItem-image']}
          src={webformatURL}
          alt={tags}
        />
      </li>
      {largeImageView && (
        <Modal src={largeImageURL} alt={tags} onClose={toggleModal} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
