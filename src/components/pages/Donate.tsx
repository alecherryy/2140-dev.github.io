import React, { useEffect } from 'react';
import { Container } from 'components/layouts/Container/Container';
import { Typography } from '@mui/material';
import { Section } from 'components/layouts/Section/Section';
import { animateScroll as scroll, scrollSpy } from 'react-scroll';

export const Donate = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }, []);

  return (
    <Section>
      <Container size="small">
        <Typography variant="h1">
          This is where your donate page goes
        </Typography>
        <Typography component="div">
          Lorem ipsum dolor sit amet, ex eos esse vocibus philosophia. Has ei
          essent adversarium, sea ea suas necessitatibus, at duo tamquam
          accusam. Eu probo inani molestiae usu, mei ut exerci quaestio, hinc
          commodo bonorum ei eam. Eu pro euismod tractatos interpretaris, qui in
          impetus percipitur. Ex salutandi efficiantur usu, has quem praesent
          partiendo ut, delicata salutatus persequeris mei te.
          <br />
          <br />
          Vivendum persecuti no duo, ius nullam recusabo id, vim malorum
          ponderum id. At tibique mentitum interpretaris usu, possim nusquam ut
          mea. Sea meis semper eu. Te sint probatus ius, duo novum principes an,
          sed te diceret tincidunt. Vel et iusto dicit intellegebat. Qui no
          lorem elitr veritus. Veri pericula est no.
          <br />
          <br />
          Lorem ipsum dolor sit amet, ex eos esse vocibus philosophia. Has ei
          essent adversarium, sea ea suas necessitatibus, at duo tamquam
          accusam. Eu probo inani molestiae usu, mei ut exerci quaestio, hinc
          commodo bonorum ei eam. Eu pro euismod tractatos interpretaris, qui in
          impetus percipitur. Ex salutandi efficiantur usu, has quem praesent
          partiendo ut, delicata salutatus persequeris mei te.
          <br />
          <br />
          Vivendum persecuti no duo, ius nullam recusabo id, vim malorum
          ponderum id. At tibique mentitum interpretaris usu, possim nusquam ut
          mea. Sea meis semper eu. Te sint probatus ius, duo novum principes an,
          sed te diceret tincidunt. Vel et iusto dicit intellegebat. Qui no
          lorem elitr veritus. Veri pericula est no.
        </Typography>
      </Container>
    </Section>
  );
};
