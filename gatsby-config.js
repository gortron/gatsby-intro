module.exports = {
  siteMetadata: {
    title: 'Gordy Lanza Portfolio Blog',
    description:
      'A personal portfolio and blogging site for writing, photography, and engineering.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
