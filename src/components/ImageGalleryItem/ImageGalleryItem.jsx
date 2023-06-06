import React from 'react';
import * as basicLightbox from 'basiclightbox';

class ImageGalleryItem extends React.Component {
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    return (
      <li key={id}>
        <img src={webformatURL} alt={tags} onClick={() => {



          basicLightbox
            .create(
              `
		<img width="1400" height="900" src=${largeImageURL}>
	`
            )
            .show();

        }} />



      </li>
    );
  }
}

export default ImageGalleryItem;
