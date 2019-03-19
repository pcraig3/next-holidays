import Document, { Head, Main, NextScript } from 'next/document'
import { apiUrl, githubSha } from '../utils/envVars'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500"
            rel="stylesheet"
          />
          {process.env.GITHUB_SHA ? (
            <meta name="keywords" content={`GITHUB_SHA=${githubSha}`} />
          ) : null}
          <meta name="keywords" content={`API_URL=${apiUrl}`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
