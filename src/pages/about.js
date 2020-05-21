import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This is About</h1>
    <p>this is a about page</p>
    <Link to="/"> &larr; go home</Link>
  </Layout>
);
