import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import BottomLink from '../components/BottomLink'

class Error extends React.Component {
  render() {
    return (
      <Layout title={`404 error`}>
        <h1>
          404{' '}
          <span role="img" aria-label="Exploding head">
            🤯
          </span>
        </h1>

        <p>omg, what were u expecting??</p>
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
