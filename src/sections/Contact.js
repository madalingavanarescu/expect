import React, { Component } from 'react';
import { Heading, Box, Image, Flex } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Helmet from '../components/Helmet';
import Calendly from '../components/Calendly';
import Fade from 'react-reveal/Fade';
import callImg from '../assets/call.svg';
import styled from 'styled-components';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['10vh', '10vh']}
      width={['90vw', '80vw']}
    />

    <Triangle
      color="primary"
      height={['10vh', '20vh']}
      width={['40vw', '20vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '10vh']}
      width={['50vw', '80vw']}
      invertX
      invertY
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 1 / 6]} style={{ maxWidth: '500px', margin: 'auto' }}>
        <Fade right>
          <ProfilePicture
            src={callImg}
            alt={'Me'}
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
          />
        </Fade>
      </Box>
      <Box width={[1, 1, 5 / 6]} px={[1, 2, 4]}>
        <Calendly></Calendly>
      </Box>
    </Flex>
  </Section.Container>
);

export default Contact;
