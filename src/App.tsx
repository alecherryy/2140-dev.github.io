import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './constants/theme/theme';
import { Homepage } from './components/pages/Homepage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
