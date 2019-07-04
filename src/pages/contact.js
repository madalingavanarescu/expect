import React from 'react';
import Layout from '../components/Layout';
import Contact from '../sections/Contact';
import Header from '../components/HeaderDemo';
import Footer from '../components/Footer';

const ContactPage = props => (
  <Layout>
    <Header />
    <Contact />
    <Footer />
  </Layout>
);

export default ContactPage;
