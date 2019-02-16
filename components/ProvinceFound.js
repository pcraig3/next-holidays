import PropTypes from 'prop-types'
import { displayDate, relativeDate } from '../utils/dates.js'
import BottomLink from './BottomLink'

const space2Nbsp = str => str.replace(/ /g, ' ')

const getPossessive = name => {
  return name.endsWith('s') ? `${name}’` : `${name}’s`
}

const DateHtml = ({ dateString }) => (
  <time dateTime={dateString}>{displayDate(dateString)}</time>
)
DateHtml.propTypes = {
  dateString: PropTypes.string,
}

const HolidaysLink = ({ nameEn }) => (
  <BottomLink href={'/'} linkText={`Not from ${nameEn}?`} />
)
HolidaysLink.propTypes = {
  nameEn: PropTypes.string,
}

const ProvinceFound = ({ province }) => (
  <React.Fragment>
    <h1>
      {getPossessive(province.nameEn)} next public holiday is{' '}
      {space2Nbsp(province.nextHoliday.nameEn)}, on{' '}
      <DateHtml dateString={province.nextHoliday.date} />.
    </h1>
    <h2>{relativeDate(province.nextHoliday.date)}</h2>
    <HolidaysLink nameEn={province.nameEn} />
  </React.Fragment>
)

ProvinceFound.propTypes = {
  province: PropTypes.object,
}

export default ProvinceFound
