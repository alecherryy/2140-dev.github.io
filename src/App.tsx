import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { Homepage } from './components/pages/Homepage';
import { Header } from 'components/layouts/Header/Header';
import { MenuProvider } from 'providers/MenuProvider/MenuProvider';
import { Footer } from 'components/layouts/Footer/Footer';
import { Route, Routes } from 'react-router';
import { Donate } from 'components/pages/Donate';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
