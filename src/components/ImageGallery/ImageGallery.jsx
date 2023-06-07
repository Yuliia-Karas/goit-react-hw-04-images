import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ imageGalleryItems }) => {
  if (imageGalleryItems)
    return (
      <ul className={css.imageGallery}>
        {imageGalleryItems.map(imageGalleryItem => {
          return (
            <ImageGalleryItem
              key={imageGalleryItem.id}
              imageGalleryItem={imageGalleryItem}
              // webformatURL={imageGalleryItem.webformatURL}
              // largeImageURL={imageGalleryItem.largeImageURL}
              // tags={imageGalleryItem.tags}
            />
          );
        })}
      </ul>
    );
};

ImageGallery.propTypes = {
  imageGalleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
export default ImageGallery;
