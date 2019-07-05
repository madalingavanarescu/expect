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

const RenponsiveClientLogo = styled.img`
  height: 65px;
  position: absolute;
  bottom: 36%;
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

const AboutDemo2 = ({ children, location }) => (
  <Section.Container id="analysis" Background={Background}>
    <StaticQuery
      query={graphql`
        query AboutDemo2Query {
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
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box
              width={[1, 1, 3 / 6]}
              style={{
                maxWidth: '500px',
                margin: 'auto',
                position: 'relative',
                display: 'block',
              }}
            >
              <ProfilePicture
                src={loseUserImg}
                alt={profile.title}
                mt={[4, 4, 0]}
                ml={[0, 0, 1]}
              />
              <ClientLogo
                url="https://www.expect.marketing/"
                logo={'https://logo.clearbit.com/' + location.search.substr(1)}
                alt="Powered by expect"
              />
            </Box>

            <Box width={[1, 1, 3 / 6]} px={[1, 2, 4]}>
              <Section.Header
                name="You are loosing leads right now"
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
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default AboutDemo2;
