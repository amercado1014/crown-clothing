import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleButton,
  inverted,
  ...otherProps
}) => (
  <button
    className={`custom-button ${inverted ? 'inverted' : ''}
      ${isGoogleButton ? 'google-sign-in' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
