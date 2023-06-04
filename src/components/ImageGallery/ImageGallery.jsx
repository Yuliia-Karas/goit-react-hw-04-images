import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageGalleryItems }) => {
  return (
    <ul>
      {imageGalleryItems.map(imageGalleryItem => {
        return (
          <ImageGalleryItem
            key={imageGalleryItem.id}
            imageGalleryItem={imageGalleryItem}
          />
        );
      })}
      ,
    </ul>
  );
};

export default ImageGallery;
