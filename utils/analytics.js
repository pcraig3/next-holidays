import ReactGA from 'react-ga'

export const initGA = gaId => {
  ReactGA.initialize(gaId)
  ReactGA.set({ anonymizeIp: true })
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
