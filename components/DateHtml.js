import PropTypes from 'prop-types'
import { displayDate } from '../utils/dates.js'

const DateHtml = ({ dateString }) => (
  <time dateTime={dateString}>{displayDate(dateString)}</time>
)
DateHtml.propTypes = {
  dateString: PropTypes.string,
}

export default DateHtml
