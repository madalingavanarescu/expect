import React from 'react';
import Layout from '../components/Layout';
import LandingPageDemo from '../sections/LandingDemo';
import AboutDemo from '../sections/AboutDemo';
import AboutDemo2 from '../sections/AboutDemo2';
import AboutDemo3 from '../sections/AboutDemo3';
import ProjectsDemo from '../sections/ProjectsDemo';
import Sharing from '../sections/Sharing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Process from '../sections/Process';
import Contact from '../sections/Contact';
import Projectos from '../sections/Projectos';

const DemoPage = props => (
  <Layout>
    <Header />
    <LandingPageDemo location={props.location} />
    <AboutDemo location={props.location} />
    <AboutDemo2 location={props.location} />
    <Projectos />
    <AboutDemo3 location={props.location} />
    <Process />
    <Contact />
    <Footer />
  </Layout>
);

export default DemoPage;
