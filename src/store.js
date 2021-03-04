import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

// Combining all reducers together
const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});

const itemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: {
    cartItems: itemsFromStorage,
  },
};
const middleware = [thunk];

// Creating store with reducers and initial state value
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
