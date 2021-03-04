import React from 'react';
import { Link } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import * as Styled from './NotFound.styles';

const NotFound = () => {
  return (
    <Styled.NotFoundWrapper>
      <FaSadTear size={50} />
      <h1>Oops! Page not found</h1>
      <p>
        Click <Link to='/'>here</Link> to navigate back to the homepage
      </p>
    </Styled.NotFoundWrapper>
  );
};

export default NotFound;
