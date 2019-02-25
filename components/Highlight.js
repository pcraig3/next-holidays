import PropTypes from 'prop-types'

const Highlight = ({ children }) => (
  <React.Fragment>
    <span>{children}</span>
    <style jsx>{`
      span {
        padding-right: 8px;
        margin-right: -8px;
        background-image: linear-gradient(to right, #0572d51a, #0572d52a);
        background-position: top right;
        background-repeat: no-repeat;
        background-size: 97% 87%;
      }
    `}</style>
  </React.Fragment>
)

Highlight.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Highlight
