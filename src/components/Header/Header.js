import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingBasket } from 'react-icons/fa';
import * as Styled from './Header.styles';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Styled.Header>
      <Link to='/'>
        <Styled.Logo
          data-testid='logo'
          src='http://localhost:3000/logo.png'
          alt='Orange'
          aria-label='Orange - Home'
        />
      </Link>

      <Link to='/trolley'>
        <Styled.TrolleyWrapper>
          <FaShoppingBasket size={25} style={{ marginRight: '8px' }} />
          <Styled.ItemCount aria-label={`${cartCount} items in basket`}>
            {cartCount}
          </Styled.ItemCount>
          Your trolley
        </Styled.TrolleyWrapper>
      </Link>
    </Styled.Header>
  );
};

export default Header;
