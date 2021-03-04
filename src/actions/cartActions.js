import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from '../constants/cartConstants';

export const addToCart = (product, qty) => (dispatch, getState) => {
  // { productId, sku, title, price, image }
  dispatch({
    type: ADD_ITEM,
    payload: {
      ...product,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: productId,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const updateQuantity = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_QUANTITY,
    payload: { product, qty },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
