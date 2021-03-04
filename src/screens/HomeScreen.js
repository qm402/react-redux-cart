import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product/Product';
import Loader from '../components/Loader/Loader';
import { Container, HeadingTitle } from '../elements/globalElements.styles';
import * as Styled from '../components/Product/Product.styles';
import { listProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { MAX_QUANTITY } from '../config/global';
import toast from 'react-hot-toast';

const HomeScreen = () => {
  const dispatch = useDispatch();

  // Getting state using useSelector
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Dispatch action when component first mounts
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Dispatch add to cart
  const addToCartHandler = (product) => {
    const item = cartItems.find((item) => item.productId === product.productId);
    // Allow cart add if max quantity not reached
    if (item && item.qty === MAX_QUANTITY) {
      toast.error(
        `Could not add to cart. Limit of ${MAX_QUANTITY} items for this product`,
        {
          duration: 2000,
        }
      );
    } else {
      toast.success(`${product.title} has been added to your basket`, {
        duration: 2000,
      });
      dispatch(addToCart(product, 1));
    }
  };

  // Display products
  const renderProductList = () => {
    return (
      <Container>
        <HeadingTitle>Products</HeadingTitle>
        <Styled.Ul>
          {products.map((product) => {
            return (
              <Product
                key={product.productId}
                product={product}
                onClick={() => {
                  addToCartHandler(product);
                }}
              />
            );
          })}
        </Styled.Ul>
      </Container>
    );
  };

  // Display loading component whilst fetching products
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Could not retrieve products. Please try again later.</p>
      ) : (
        renderProductList()
      )}
    </Container>
  );
};

export default HomeScreen;
