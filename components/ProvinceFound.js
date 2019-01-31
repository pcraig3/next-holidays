import format from 'date-fns/format'
import formatDistance from 'date-fns/distance_in_words_to_now'
import BottomLink from './BottomLink'

const space2Nbsp = str => str.replace(/ /g, ' ')

const DateHtml = ({ dateString }) => (
  <time dateTime={dateString}>{format(new Date(dateString), 'MMMM Do')}</time>
)

const HolidaysLink = ({ nameEn }) => (
  <BottomLink href={'/'} linkText={`Not from ${nameEn}?`} />
)

export default ({ province }) => (
  <React.Fragment>
    <h1>
      {province.nameEn}’s next public holiday is{' '}
      {space2Nbsp(province.nextHoliday.nameEn)}, on{' '}
      <DateHtml dateString={province.nextHoliday.date} />.
    </h1>
    <h2>That's in {formatDistance(new Date(province.nextHoliday.date))}.</h2>
    <HolidaysLink nameEn={province.nameEn} />
  </React.Fragment>
)
