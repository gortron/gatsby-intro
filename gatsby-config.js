module.exports = {
  siteMetadata: {
    title: 'Gordy Lanza Portfolio Blog',
    description:
      'A personal portfolio and blogging site for writing, photography, and engineering.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    // if you had multiple content types, you would 'duplicate' the following:
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'content/posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'content/images'
      }
    }
  ],
};
