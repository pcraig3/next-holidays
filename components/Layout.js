import { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics.js'
import { gaId } from '../utils/envVars'

class Layout extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production' && gaId) {
      if (window && !window.GA_INITIALIZED) {
        initGA(gaId)
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }

  render() {
    return (
      <div role="main">
        <Head>
          <title>
            {this.props.title ? `${this.props.title} ` : 'next holidays'}
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <style jsx global>{`
          body {
            font-size: 28px;
            font-family: 'IBM Plex Sans', sans-serif;
            line-height: 1.25;
            margin-top: 15px;
            padding-left: 15px;
            padding-right: 10px;
            padding-bottom: 25px;
            max-width: 960px;
            background-color: snow;
            font-weight: 400;
          }

          h1,
          h2 {
            font-weight: 400;
            font-size: 200%;
            margin-top: 0;
            margin-bottom: 20px;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          li {
            margin-bottom: 5px;
          }

          p {
            margin-top: 0;
            margin-bottom: 8px;
          }

          p.bottom-margin {
            margin-bottom: 20px;
          }

          a,
          a:visited {
            color: #0572d5;
            text-decoration: none;
          }

          a:hover,
          a:focus {
            text-decoration: underline;
          }

          *:focus {
            outline: 3px solid #ffbf47;
            outline-offset: 2px;
          }

          @media only screen and (max-width: 900px) {
            body {
              font-size: 24px;
            }
          }

          @media only screen and (max-width: 600px) {
            body {
              font-size: 22px;
            }

            h1,
            h2 {
              font-size: 180%;
              font-weight: 500;
            }
          }

          @media only screen and (max-width: 320px) {
            body {
              font-size: 18px;
              padding-left: 8px;
              padding-right: 0;
              font-weight: 500;
            }

            li {
              margin-bottom: 7px;
            }
          }
        `}</style>
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Layout
