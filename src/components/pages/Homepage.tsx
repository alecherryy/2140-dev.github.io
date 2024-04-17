import React from 'react';
import { About } from 'components/core/About/About';
import { Donate } from 'components/core/Donate/Donate';
import { Hero } from 'components/core/Hero/Hero';
import { Team } from 'components/core/Team/Team';
import { Header } from 'components/layouts/Header/Header';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Team />
      <Donate />
    </>
  );
};
