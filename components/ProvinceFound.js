import PropTypes from 'prop-types'
import format from 'date-fns/format'
import formatDistance from 'date-fns/distance_in_words_to_now'
import addHours from 'date-fns/add_hours'
import BottomLink from './BottomLink'

const space2Nbsp = str => str.replace(/ /g, ' ')

const getDateAtNoonFromString = str => addHours(new Date(str), 12)

const DateHtml = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(getDateAtNoonFromString(dateString), 'MMMM Do')}
  </time>
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
      {province.nameEn}’s next public holiday is{' '}
      {space2Nbsp(province.nextHoliday.nameEn)}, on{' '}
      <DateHtml dateString={province.nextHoliday.date} />.
    </h1>
    <h2>
      That’s in{' '}
      {formatDistance(getDateAtNoonFromString(province.nextHoliday.date))}.
    </h2>
    <HolidaysLink nameEn={province.nameEn} />
  </React.Fragment>
)

ProvinceFound.propTypes = {
  province: PropTypes.object,
}

export default ProvinceFound
