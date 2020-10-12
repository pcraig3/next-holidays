import PropTypes from 'prop-types'
import { relativeDate } from '../utils/dates.js'
import { getPossessive } from '../utils/strings.js'
import DateHtml from './DateHtml'
import Highlight from './Highlight'
import BottomLink from './BottomLink'

const HolidaysLink = ({ nameEn }) => <BottomLink href={'/'} linkText={`Not from ${nameEn}?`} />
HolidaysLink.propTypes = {
  nameEn: PropTypes.string,
}

const ProvinceFound = ({ province }) => (
  <React.Fragment>
    <h1>
      {getPossessive(province.nameEn)} next public holiday is {province.nextHoliday.nameEn}, on{' '}
      <Highlight>
        <DateHtml dateString={province.nextHoliday.date} />
      </Highlight>
      .
    </h1>
    <h2>{relativeDate(province.nextHoliday.date)}</h2>
    <HolidaysLink nameEn={province.nameEn} />
  </React.Fragment>
)

ProvinceFound.propTypes = {
  province: PropTypes.object,
}

export default ProvinceFound
