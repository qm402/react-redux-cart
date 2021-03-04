import axios from 'axios';
import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_SUCCESS,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_FETCH_REQUEST });

    const { data } = await axios.get(
      'https://jsainsburyplc.github.io/front-end-test/products.json'
    );

    dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FETCH_FAIL,
      payload: error.message,
    });
  }
};
