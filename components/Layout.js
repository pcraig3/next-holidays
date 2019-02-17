import PropTypes from 'prop-types'
import Head from 'next/head'

const Layout = props => (
  <div role="main">
    <Head>
      <title>{props.title ? `${props.title} ` : 'next holidays'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>{`
      body {
        font-size: 28px;
        font-family: sans-serif;
        line-height: 1.25;
        margin-top: 15px;
        padding-left: 15px;
        padding-right: 10px;
        padding-bottom: 25px;
        max-width: 960px;
        background-color: snow;
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
        }
      }

      @media only screen and (max-width: 320px) {
        body {
          font-size: 18px;
          padding-left: 10px;
          padding-right: 5px;
        }
      }
    `}</style>
    {props.children}
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Layout
