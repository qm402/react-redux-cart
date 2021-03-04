import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton.style';

const Button = ({ children, onClick, arialLabel }) => {
  return (
    <StyledButton
      type='submit'
      onClick={onClick}
      aria-label={arialLabel}
      primary
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  arialLabel: PropTypes.string,
};

export default Button;
