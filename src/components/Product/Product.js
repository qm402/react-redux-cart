import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import * as Styled from './Product.styles';

const Product = ({ product, onClick }) => {
  const { image, title, price, sku } = product;

  return (
    <Styled.List>
      <Styled.Image src={image} alt={title} aria-hidden={true} />
      <Styled.Text>{title}</Styled.Text>
      <Styled.Text aria-label={`sku ${sku}`}>
        <span aria-hidden={true}>{sku}</span>
      </Styled.Text>
      <Styled.ControlWrapper>
        <Styled.Text>
          <strong>£{price.toFixed(2)}</strong>
        </Styled.Text>
        {onClick && (
          <Button
            primary
            onClick={onClick}
            arialLabel={`Add to basket, ${title}`}
          >
            Add to basket
          </Button>
        )}
      </Styled.ControlWrapper>
    </Styled.List>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

export default Product;
