import React, { Component } from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Helmet from '../components/Helmet';
import Calendly from '../components/Calendly';

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

class Contact extends React.Component {
  componentDidMount() {
    console.log('da');
    setTimeout(function() {
      console.log(
        document.getElementsByClassName(
          'is-opaque history no-touchevents localstorage',
        ),
      );
      document.getElementsByClassName(
        'is-opaque history no-touchevents localstorage',
      )[0].style.backgroundColor = 'transparent';
    }, 10000);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render() {
    return (
      <Layout>
        <Section.Container id="Da" Background={Background}>
          <Calendly></Calendly>
        </Section.Container>
      </Layout>
    );
  }
}

export default Contact;
