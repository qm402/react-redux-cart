import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_SUCCESS,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_FETCH_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
