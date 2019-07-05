import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

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

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Post = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {name}
    </EllipsisHeading>
    {logo && <CoverImage src={logo.image.src} height="200px" alt={name} />}
    <Text m={3}>{description}</Text>
    <ImageSubtitle bg="primaryLight" color="white" x="right" y="bottom" round>
      {type}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

const parsePost = postFromGraphql => {
  const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400';
  const MEDIUM_URL = 'https://medium.com';
  const {
    id,
    uniqueSlug,
    createdAt,
    title,
    virtuals,
    author,
  } = postFromGraphql;
  const image =
    virtuals.previewImage.imageId &&
    `${MEDIUM_CDN}/${virtuals.previewImage.imageId}`;
  return {
    id,
    title,
    time: virtuals.readingTime,
    date: createdAt,
    text: virtuals.subtitle,
    image,
    url: `${MEDIUM_URL}/${author.username}/${uniqueSlug}`,
  };
};

const edgeToArray = data => data.edges.map(edge => edge.node);
const isMediumUserDefine = true;

const Projectos = () => (
  <Section.Container id="Expertise" Background={Background}>
    <Section.Header
      name="How your website should look like"
      icon="💻"
      Box="notebook"
    />
    <StaticQuery
      query={graphql`
        query ProjectosQuery {
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
        <CardContainer minWidth="300px">
          {contentfulAbout.projects.map((p, i) => (
            <Fade bottom delay={i * 200}>
              <Post key={p.id} {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projectos;
