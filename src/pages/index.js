import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This is Home</h1>
    <p>this is a home page</p>
    <Link to="/about">go to about &rarr;</Link>
  </Layout>
);
