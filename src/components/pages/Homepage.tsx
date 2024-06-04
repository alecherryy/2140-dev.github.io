import { About } from 'components/core/About/About';
import { GetInvolved } from 'components/core/GetInvolved/GetInvolved';
import { Hero } from 'components/core/Hero/Hero';
import { Team } from 'components/core/Team/Team';

export const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <GetInvolved />
    </>
  );
};
