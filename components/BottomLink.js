import PropTypes from 'prop-types'

const BottomLink = ({ href, linkText }) => (
  <React.Fragment>
    <p>
      <a href={href}>{`${linkText}`}</a>
    </p>
    <style jsx>{`
      p {
        position: fixed;
        bottom: 0;
      }
    `}</style>
  </React.Fragment>
)

BottomLink.propTypes = {
  href: PropTypes.string,
  linkText: PropTypes.string,
}

export default BottomLink
