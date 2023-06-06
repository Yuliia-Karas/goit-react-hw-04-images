import React from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    return (
      <li className={css.imageGalleryItem} key={id}>
        <img
          className={css['imageGalleryItem-image']}
          src={webformatURL}
          alt={tags}
          onClick={() => {
            basicLightbox
              .create(
                `<img src=${largeImageURL} alt=${tags} width="800" height="600"/>
               `
              )
              .show();
          }}
        />
      </li>
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
