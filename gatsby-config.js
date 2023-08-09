/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `thauros`,
    siteUrl: `https://thauros.vercel.app/`
  },
  plugins: [
  "gatsby-plugin-postcss",`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/favicon.svg",
    },
  }
],
};