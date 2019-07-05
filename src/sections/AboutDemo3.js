import React from 'react';
import { Heading, Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import loseUserImg from '../assets/lose_user.svg';
import { Tooltip } from 'react-tippy';

import Logos from '../components/Logos';

import semrushLogo from '../assets/airbnb_logo.svg';
import mozLogo from '../assets/nike_logo.svg';
import accurankerLogo from '../assets/braun_logo.svg';
import awrLogo from '../assets/clearbit_logo.svg';
import linkdexLogo from '../assets/storybook_logo.svg';
import conductorLogo from '../assets/mozilla_logo.svg';

const logos = [
  { id: '1', image: semrushLogo, tooltip: 'Airbnb' },
  { id: '2', image: mozLogo, tooltip: 'Nike' },
  { id: '3', image: accurankerLogo, tooltip: 'Braun' },
  { id: '4', image: awrLogo, tooltip: 'Clearbit' },
  { id: '5', image: linkdexLogo, tooltip: 'Storybook' },
  { id: '6', image: conductorLogo, tooltip: 'Mozilla' },
  { id: '7', image: conductorLogo, tooltip: 'Here is where you can be!' },
];

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const RenponsiveLogo = styled.img`
  position: absolute;
  width: 30px;
  left: 67%;
  top: 44.5%;

  @media (min-width: 400px) {
  }
`;

const ClientLogo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveClientLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const LogosContainer = ({ locationImage }) =>
  logos.map(logo => (
    <Box width={[1 / 3, 1 / 3, 1 / 3, 1 / 3]} key={logo.id} px={0}>
      <Tooltip title={logo.tooltip} position="bottom" trigger="mouseenter">
        <img src={logo.image} alt="logo" />
      </Tooltip>
    </Box>
  ));

const RenponsiveClientLogo = styled.img`
  height: 65px;
  position: absolute;
  bottom: 40%;
  left: 7%;

  @media (min-width: 400px) {
    height: 65px;
  }
`;

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 20%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 0%;
  }
`;

const AboutDemo3 = ({ children, location }) => (
  <Section.Container id="trusted" Background={Background}>
    <StaticQuery
      query={graphql`
        query AboutDemo3Query {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        logos[6].image =
          'https://logo.clearbit.com/' + location.search.substr(1);
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 3 / 6]} px={[1, 2, 4]}>
              <Section.Header
                name="Based on a framework used by the biggest brands"
                icon="📉"
                label="person"
              />
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box width={[1, 1, 3 / 6]}>
              <Logos width={[1, 1, 1, 5 / 6]}>
                <div>
                  <LogosContainer
                    locationImage={
                      'https://logo.clearbit.com/' + location.search.substr(1)
                    }
                  />
                </div>
              </Logos>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default AboutDemo3;
