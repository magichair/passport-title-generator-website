module.exports = {
  pathPrefix: `/passport-title-generator-website`,
  siteMetadata: {
    title: `Passport Title Generator`,
    description: `Randomizer for generating new fun titles for your Animal Crossing: New Horizons passport.`,
    author: `@magichair`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `passport-title-generator-website`,
        short_name: `passport-title`,
        start_url: `/`,
        background_color: `#21ed0e`,
        theme_color: `#21ed0e`,
        display: `minimal-ui`,
        icon: `src/images/ac-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-65966102-2`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: `magichair.github.io`,
      },
    },
  ],
}
