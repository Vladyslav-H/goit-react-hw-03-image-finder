import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => {
  return <ButtonStyled onClick={onClick}>{title}</ButtonStyled>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
