import Document, { Html, Head, Main, NextScript } from 'next/document'

import { apiUrl, githubSha } from '../utils/envVars'

const APP_NAME = 'next-holidays'
const APP_DESCRIPTION = 'When is your next holiday?'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500"
            rel="stylesheet"
          />
          {process.env.GITHUB_SHA ? (
            <meta name="keywords" content={`GITHUB_SHA=${githubSha}`} />
          ) : null}
          <meta name="keywords" content={`API_URL=${apiUrl}`} />

          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFAFA" />

          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
