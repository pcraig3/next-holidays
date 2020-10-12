const config = require('../next.config.js')
const apiUrl = config.publicRuntimeConfig.apiUrl.replace(/\/$/, '')

module.exports = {
  connectSrc: ["'self'", 'https://fonts.googleapis.com', apiUrl],
  defaultSrc: ["'self'"],
  fontSrc: ["'self'", 'https://fonts.gstatic.com'],
  imgSrc: ["'self'", 'https://www.google-analytics.com'],
  scriptSrc: ["'self'", 'https://www.google-analytics.com'],
  styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
}
