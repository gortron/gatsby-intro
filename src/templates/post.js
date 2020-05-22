import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug
      }
      body
    }
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
