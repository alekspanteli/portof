import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
