import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import BottomLink from '../components/BottomLink'

class Error extends React.Component {
  static getInitialProps({ res, err, asPath }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode, asPath }
  }

  getStatusCodeMessage(statusCode) {
    const firstDigit = Math.floor(statusCode / 100)

    if (firstDigit == 4) {
      return <p>omg, what were u expecting??</p>
    } else if (firstDigit == 5) {
      return <p>sorry, i think my fault.</p>
    }

    return <p>yikes, bad luck.</p>
  }

  render() {
    return (
      <Layout title={`${this.props.statusCode} error`}>
        <h1>
          {this.props.statusCode}{' '}
          <span role="img" aria-label="Exploding head">
            🤯
          </span>
        </h1>

        {this.props.statusCode ? (
          this.getStatusCodeMessage(this.props.statusCode)
        ) : (
          <p>
            sorry, maybe <a href={this.props.asPath}>refresh</a>??
          </p>
        )}
        <BottomLink href={'/'} linkText={'Let’s start over.'} />
      </Layout>
    )
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
  asPath: PropTypes.string,
}

export default Error
