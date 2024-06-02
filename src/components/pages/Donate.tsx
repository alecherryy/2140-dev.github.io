import React from 'react';
import { About } from 'components/core/About/About';
import { Donate } from 'components/core/GetInvolved/GetInvolved';
import { Hero } from 'components/core/Hero/Hero';
import { Team } from 'components/core/Team/Team';
import { Header } from 'components/layouts/Header/Header';
import { MenuProvider } from 'providers/MenuProvider/MenuProvider';

export const Homepage = () => {
  return (
    <>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Hero />
      <About />
      <Team />
      <Donate />
    </>
  );
};
