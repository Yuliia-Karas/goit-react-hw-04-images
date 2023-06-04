import React from "react";

class ImageGalleryItem extends React.Component {

    render() {

         const { webformatURL , largeImageURL , tags } = this.props;
        return
                <li>
  <img src={webformatURL} alt={tags} />
</li>
    }
}

export default ImageGalleryItem;