import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import Header from './ui/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>Hello!</h1>
    </ThemeProvider>
  );
}