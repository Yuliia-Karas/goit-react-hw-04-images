import React from "react";

class ImageGalleryItem extends React.Component {
    constructor(props) {
    super(props)
    };
    
    render() {

         const { webformatURL , largeImageURL , tags } = this.props;
        return (
              <li>
  <img src={webformatURL} alt={tags} />
</li>
        )
              
    }
}

export default ImageGalleryItem;