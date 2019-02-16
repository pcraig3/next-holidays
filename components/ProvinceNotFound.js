import PropTypes from 'prop-types'

import BottomLink from './BottomLink'

const ProvinceNotFound = ({ errorMessage }) => (
  <React.Fragment>
    <h1>Whoops</h1>
    <p>{`${errorMessage}`}</p>
    <BottomLink href={'/'} linkText={'Pick a real province.'} />
  </React.Fragment>
)

ProvinceNotFound.propTypes = {
  errorMessage: PropTypes.string,
}

export default ProvinceNotFound
