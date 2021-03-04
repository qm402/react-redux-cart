import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions/cartActions';
import { MAX_QUANTITY } from '../config/global';
import { Container, HeadingTitle } from '../elements/globalElements.styles';
import Button from '../components/Button/Button';
import { FaShoppingCart } from 'react-icons/fa';
import * as Styled from '../elements/Trolley.styles';

const TrolleyScreen = () => {
  const dispatch = useDispatch();

  // Get cart from state
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Dispatch updateQuantity or remove from cart if qty === 0
  const updateQuantityHandler = (item, quantity) => {
    if (quantity === 0) {
      dispatch(removeFromCart(item.productId));
    } else {
      dispatch(updateQuantity(item, quantity));
    }
  };

  // Render Empty Trolley if nothing in cart
  const emptyTrolley = () => {
    return (
      <Styled.EmptyTrollerWrapper>
        <FaShoppingCart size={50} />
        <h1>Empty trolley</h1>
        <p>Check out the homepage to view products</p>
      </Styled.EmptyTrollerWrapper>
    );
  };

  return (
    <Container>
      {cartItems.length === 0 ? (
        emptyTrolley()
      ) : (
        <>
          <HeadingTitle>Your Trolley</HeadingTitle>
          <Styled.TrolleyWrapper>
            <Styled.TrolleyChildWrapper>
              <ul>
                {cartItems.map((item) => (
                  <Styled.TrolleyItem key={item.productId}>
                    <Styled.TrolleyItemImage
                      src={item.image}
                      alt={item.title}
                    />
                    <Styled.TrolleyItemText>
                      <p>{item.title}</p>
                      <p>
                        <strong>
                          £
                          {(parseFloat(item.price) * Number(item.qty)).toFixed(
                            2
                          )}
                        </strong>{' '}
                      </p>
                      <p>
                        £{item.price.toFixed(2)} {''}
                        per unit
                      </p>
                      <Styled.TrolleyControls htmlFor='quantity'>
                        <Styled.TrolleyQuantity
                          name='quantity'
                          aria-label='quantity'
                          onChange={(e) =>
                            updateQuantityHandler(item, Number(e.target.value))
                          }
                          value={item.qty}
                        >
                          {[...Array(MAX_QUANTITY + 1)].map((x, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </Styled.TrolleyQuantity>
                        <Button
                          onClick={() =>
                            dispatch(removeFromCart(item.productId))
                          }
                          arialLabel={`Remove ${item.title}`}
                        >
                          Remove
                        </Button>
                      </Styled.TrolleyControls>
                    </Styled.TrolleyItemText>
                  </Styled.TrolleyItem>
                ))}
              </ul>
            </Styled.TrolleyChildWrapper>
            <Styled.TrolleyChildWrapper marginLeft>
              <Styled.CheckoutPanel>
                <h1>Order Summary</h1>
                <Styled.SummaryItem>
                  <dt>Subtotal </dt>
                  <dd>
                    £
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </dd>
                </Styled.SummaryItem>
                <Styled.SummaryItem>
                  <dt>Delivery </dt>
                  <dd>FREE</dd>
                </Styled.SummaryItem>
                <Styled.SummaryItem>
                  <dt>Total </dt>
                  <dd>
                    {' '}
                    £
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </dd>
                </Styled.SummaryItem>

                <Button>Checkout</Button>
              </Styled.CheckoutPanel>
            </Styled.TrolleyChildWrapper>
          </Styled.TrolleyWrapper>
        </>
      )}
    </Container>
  );
};

export default TrolleyScreen;
