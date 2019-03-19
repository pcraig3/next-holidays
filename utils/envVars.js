import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

// remove possible trailing slash from API_URL env var
export const apiUrl = publicRuntimeConfig.apiUrl.replace(/\/$/, '')

export const githubSha = serverRuntimeConfig.githubSha
