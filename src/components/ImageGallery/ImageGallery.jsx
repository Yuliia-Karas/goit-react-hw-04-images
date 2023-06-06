import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageGalleryItems }) => {
  if (imageGalleryItems)
    return (
      <ul>
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
