import React from 'react';
import { Header } from '../layouts/Header/Header';
import { Hero } from '../core/Hero/Hero';
import { About } from '../core/About/About';
import { Team } from '../core/Team/Team';
import { Donate } from '../core/Donate/Donate';

export const Homepage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Team/>
      <Donate/>
    </>
  )
}