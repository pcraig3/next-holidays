import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

// remove possible trailing slash from API_URL env var
export default publicRuntimeConfig.apiUrl.replace(/\/$/, '')
