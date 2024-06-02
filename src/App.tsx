import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { Homepage } from './components/pages/Homepage';
import { Header } from 'components/layouts/Header/Header';
import { MenuProvider } from 'providers/MenuProvider/MenuProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
