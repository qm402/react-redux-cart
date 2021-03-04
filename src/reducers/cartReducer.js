import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from '../constants/cartConstants';

export const cartReducer = (
  state = {
    cartItems: [],
    shippingAddress: '',
  },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      // Check proposed added item exists in basket
      const itemExist = state.cartItems.find((product) =>
        product.productId === action.payload.productId ? true : false
      );

      if (itemExist) {
        // Update the item quanity by 1
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.productId === action.payload.productId
              ? { ...product, qty: product.qty + 1 }
              : product
          ),
        };
      } else {
        // Add item to basket if it item doesn't exist in basket
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    // Remove item from cart based on productId
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.productId !== action.payload
        ),
      };

    // Update Quantity based on productId
    case UPDATE_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems.map((product) => {
          return product.productId === action.payload.product.productId
            ? { ...product, qty: action.payload.qty }
            : product;
        }),
      };
    }

    default:
      return state;
  }
};
