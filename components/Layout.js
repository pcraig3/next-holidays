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
        margin-top: 15px;
        padding-left: 15px;
        padding-right: 10px;
        max-width: 960px;
        background-color: snow;
      }

      h1, h2 {
        font-weight: 400;
        font-size: 200%;
        margin-top: 0;
        margin-bottom: 25px;
        }
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        padding-bottom: 5px;
      }

      a, a:visited {
        color: #0572d5;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
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
      }

      @media only screen and (max-width: 320px) {
        body {
          font-size: 18px;
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
