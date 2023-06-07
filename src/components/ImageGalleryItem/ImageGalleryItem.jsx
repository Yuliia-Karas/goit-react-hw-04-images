import React from 'react';
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
import css from './ImageGalleryItem.module.css';
//import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends React.Component {
  state = {
    largeImageView: false,
  };

  toggleModal = () => {
    // debugger;
    this.setState(prevState => ({ largeImageView: !prevState.largeImageView }));

  };

  render() {
    const { id, webformatURL, largeImageURL, tags } =
      this.props.imageGalleryItem;
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

            // onClick={() => {
            //   this.getState({ largeImageView: true });
            //   //return <Modal src={largeImageURL} alt={tags} />;
            //   // basicLightbox
            //   //   .create(
            //   //     `<img src=${largeImageURL} alt=${tags} width="800" height="600"/>
            //   //    `
            //   //   )
            //   //   .show();
            // }}
          />
        </li>
        {this.state.largeImageView && (
          <Modal>
            src={largeImageURL}
            alt={tags}
            onClose={this.toggleModal}
          </Modal>
        )}
      </>
    );
  }
}

// ImageGalleryItem.propTypes = {
//   id: PropTypes.number,
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };

export default ImageGalleryItem;
