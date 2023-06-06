import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ imageGalleryItems }) => {
  if (imageGalleryItems)
    return (
      <ul className={css.imageGallery}>
        {imageGalleryItems.map(imageGalleryItem => {
          return (
            <ImageGalleryItem
              key={imageGalleryItem.id}
              webformatURL={imageGalleryItem.webformatURL}
              largeImageURL={imageGalleryItem.largeImageURL}
              tags={imageGalleryItem.tags}
            />
          );
        })}
        ,
      </ul>
    );
};

export default ImageGallery;
