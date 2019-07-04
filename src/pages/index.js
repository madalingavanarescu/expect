import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Expertise from '../sections/Projects';
import Process from '../sections/Process';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projectos from '../sections/Projectos';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projectos />
    <Process />
    <Footer />
  </Layout>
);

export default IndexPage;
