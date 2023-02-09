import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';
const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    backgroundColor: '#e1e1e1',
    green: '#008000',
    red: '#f50707',
    lightGrey: '#d6d0d0',
    grey: '#9a9292',
    blue: '#bcebdd',
  },
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
