import { GalleryItem,ImageStyled } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webImg, largeImg } = this.props;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <ImageStyled src={webImg} alt={webImg} />
        </GalleryItem>
        {this.state.isModalOpen && (
          <Modal largeImg={largeImg} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImg: PropTypes.string.isRequired,
  webImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
