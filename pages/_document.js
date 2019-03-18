import Document, { Head, Main, NextScript } from 'next/document'
import apiUrl from '../utils/apiUrl'

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
          <meta name="keywords" content={`api_url=${apiUrl}`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
