import Head from 'next/head'

const Layout = props => (
  <div>
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
      }

      h1, h2 {
        font-weight: 400;
        font-size: 200%;
        margin-top: 0;
        margin-bottom: 25px;
        }
      }
      @media only screen and (max-width: 600px) {
        body {
          background-color: lightblue;
        }
      }
    `}</style>
    {props.children}
  </div>
)

export default Layout
