import React from 'react';
import { Heading, Box, Image, Flex, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import CountUp from 'react-countup';

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

const CountWrapper = styled.div`
  width: 100%;
  text-align: center;
  bottom: 36%;
  font-size: 37px;
  border: black;
  color: white;
  position: absolute;
  text-shadow: -1px 0 #e91e63, 0 3px #e91e63, 1px 0 #e91e63, 0 -1px #e91e63;
`;

const Gauge = styled.div`
  background: #f4cbe9;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position:relative;
  border:5px solid #ff4e42;

  transition: all 0.3s ease;

  &:hover
  {
      -webkit-transform: scale(1.15);
      -ms-transform: scale(1.15);
      transform: scale(1.15);
  }

  .lh-scorescale {
    position: absolute;
    bottom: -70%;
    right: -100%;
    color: grey;
    padding: 0 1.5 0;
    text-align: right;
    transform-origin: bottom right;
    will-change: opacity; /* opacity is changed on scroll */

    display: inline-flex;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 8px 8px;
  }

  .lh-scorescale-range {
    margin-left: 10px;
    white-space: nowrap;

   &:before{
      content: '';
      width: 20px;
      height: 7px;
      border-radius: 4px;
      display: inline-block;
      margin: 0 5px;
    }
  }

  .lh-scorescale-range--pass{

     &:before{
      margin-bottom: 2px;
      background-color: #0cce6b;
     }
  }

  .lh-scorescale-range--average{

     &:before{
      margin-bottom: 2px;
      background-color: #ffa400;
     }
  }

  .lh-scorescale-range--fail{

     &:before{
      margin-bottom: 2px;
      background-color: #ff4e42;
     }
  }
  }
}
`;

const Explanation = styled.div`
  font-size: 24px;
  position: absolute;
  bottom: -35%;
  right: -100%;
  width: 392px;
  text-align: center;
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

var loadingTime = Math.random() * (8 - 6) + 6;

const AboutDemo = ({ children, location }) => (
  <Section.Container id="analysis" Background={Background}>
    <Section.Header name="Analysis" icon="📊" label="person" />
    <StaticQuery
      query={graphql`
        query AboutDemoQuery {
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
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Gauge>
                <CountWrapper>
                  <CountUp
                    start={0}
                    end={loadingTime}
                    duration={10}
                    separator=","
                    decimals={1}
                    decimal=","
                    suffix=" sec"
                  />
                </CountWrapper>

                <Explanation>{location.search.substr(1)}</Explanation>
                <div className="lh-scorescale">
                  <span className="lh-scorescale-range lh-scorescale-range--pass">
                    0 – 3,0 sec
                  </span>
                  <span className="lh-scorescale-range lh-scorescale-range--average">
                    3,1 – 5,9 sec
                  </span>
                  <span className="lh-scorescale-range lh-scorescale-range--fail">
                    6,0 – 20,0 sec
                  </span>
                </div>
              </Gauge>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default AboutDemo;
