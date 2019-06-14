import React from 'react';
import Layout from '../components/Layout';
import LandingPageDemo from '../sections/LandingDemo';
import AboutDemo from '../sections/AboutDemo';
import ProjectsDemo from '../sections/ProjectsDemo';
import Sharing from '../sections/Sharing';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DemoPage = props => (
  <Layout>
    <Header />
    <LandingPageDemo location={props.location} />
    <AboutDemo location={props.location} />
    <ProjectsDemo />
    <Sharing />
    <Footer />
  </Layout>
);

export default DemoPage;
