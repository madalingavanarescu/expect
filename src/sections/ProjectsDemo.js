import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/FlipCard';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  display: table;
  padding: 10px;
`;

const HeaderTrue = styled.span`
  background-color: #00d68f;
  border-bottom-width: 0;
  border-bottom-color: #00d68f;
  color: #ffffff;
`;

const HeaderFalse = styled.span`
  background-color: #ff3d71;
  border-bottom-width: 0;
  border-bottom-color: #ff3d71;
  color: #ffffff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex id="front" style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <HeaderFalse>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </HeaderFalse>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>
    </Flex>
    <Flex id="back" style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <HeaderTrue>
          <Title my={2} pb={1}>
            {repositoryUrl}
          </Title>
        </HeaderTrue>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>
    </Flex>
  </Card>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
  }).isRequired,
};

const ProjectsDemo = () => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="ProjectsDemo" icon="💻" Box="notebook" />
    <StaticQuery
      query={graphql`
        query ProjectsDemoQuery {
          contentfulAbout {
            projects {
              id
              name
              description
              projectUrl
              repositoryUrl
              publishedDate(formatString: "YYYY")
              type
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.projects.map((p, i) => (
            <Fade bottom delay={i * 200}>
              <Project key={p.id} {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default ProjectsDemo;
