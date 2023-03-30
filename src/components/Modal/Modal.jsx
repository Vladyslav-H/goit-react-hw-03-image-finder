import { OverlayStyled, ModalStyled } from './Modal.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEscape);
  }
  closeModalByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImg } = this.props;
    return (
      <OverlayStyled onClick={this.handleCloseModal}>
        <ModalStyled>
          <img src={largeImg} alt={largeImg} width="800" height="600" />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
