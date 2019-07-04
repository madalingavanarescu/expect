import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text, Image } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import NameForm from '../components/NameForm';
import expectLogoFull from '../components/Logo/PortfolioFull.svg';
import styled from 'styled-components';
import fastLoadingImg from '../assets/fast_loading.svg';
import Rotate from 'react-reveal/Rotate';

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const RenponsiveLogo = styled.img`
  width: 200px;
  height: 110px;

  @media (min-width: 400px) {
    width: 200px;
    height: 110px;
  }
`;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondaryLight"
      height={['38vh', '20vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
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

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Flex justifyContent="left" alignItems="left">
                  <Logo
                    url="https://www.expect.marketing/"
                    logo={expectLogoFull}
                    alt="Powered by expect"
                  />
                </Flex>
                <Flex justifyContent="left" alignItems="left">
                  <NameForm />
                </Flex>
                <Heading
                  as="h2"
                  color="primary"
                  fontSize={[4, 5, 6]}
                  mb={[3, 5]}
                  textAlign="left"
                >
                  <TextLoop>
                    {roles.map(text => (
                      <Text width={[300, 500]} key={text}>
                        {text}
                      </Text>
                    ))}
                  </TextLoop>
                </Heading>

                <Flex alignItems="left" justifyContent="left" flexWrap="wrap">
                  {socialLinks.map(({ id, ...rest }) => (
                    <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                      <SocialLink {...rest} />
                    </Box>
                  ))}
                </Flex>
              </Box>
              <Box
                width={[1, 1, 2 / 6]}
                style={{ maxWidth: '500px', margin: 'auto' }}
              >
                <Rotate bottom right>
                  <ProfilePicture
                    src={fastLoadingImg}
                    alt={'da'}
                    mt={[4, 4, 0]}
                    ml={[0, 0, 1]}
                  />
                </Rotate>
              </Box>
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
