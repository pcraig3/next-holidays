const withPWA = require('next-pwa')
// https://github.com/shadowwalker/next-pwa/issues/89#issuecomment-666374057

module.exports = withPWA({
  serverRuntimeConfig: {
    // Will only be available on the server side
    githubSha: process.env.GITHUB_SHA || false,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: process.env.API_URL || 'https://canada-holidays.ca/api',
    gaId: process.env.GA_ID || false,
  },
  pwa: {
    dest: 'public',
  },
})
