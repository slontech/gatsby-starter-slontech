// @flow
import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';

const AboutPage = () => (
  <Layout>
    <h1>Hi from the About page</h1>
    <p>nothing to see here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
