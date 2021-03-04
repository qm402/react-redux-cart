import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as theme from './config/theme';
import store from './store';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  ${(props) => props.theme.primaryFont};
  }
  body {
    background: ${(props) => props.theme.secondaryColor};
  }

  a {
  text-decoration: none;
  color: inherit;
  }
  
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
