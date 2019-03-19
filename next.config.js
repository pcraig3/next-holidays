module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    githubSha: process.env.GITHUB_SHA || false,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: process.env.API_URL || 'https://holidays-canada.azurewebsites.net',
  },
}
