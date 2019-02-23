import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-37633400-9')
  ReactGA.set({ anonymizeIp: true })
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
