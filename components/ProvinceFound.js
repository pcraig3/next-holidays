import Link from 'next/link'
var format = require('date-fns/format')
var formatDistance = require('date-fns/distance_in_words_to_now')

const space2Nbsp = str => str.replace(/ /g, ' ')

const DateHtml = ({ dateString }) => (
  <time dateTime={dateString}>{format(new Date(dateString), 'MMMM Do')}</time>
)

const BottomLink = ({ nameEn }) => (
  <React.Fragment>
    <p>
      <Link href="/">
        <a>Not from {`${nameEn}`}?</a>
      </Link>
    </p>
    <style jsx>{`
      p {
        position: absolute;
        bottom: 0;
      }
    `}</style>
  </React.Fragment>
)

export default ({ province }) => (
  <React.Fragment>
    <h1>
      {province.nameEn}’s next public holiday is{' '}
      {space2Nbsp(province.nextHoliday.nameEn)}, on{' '}
      <DateHtml dateString={province.nextHoliday.date} />.
    </h1>
    <h2>That's in {formatDistance(new Date(province.nextHoliday.date))}.</h2>
    <BottomLink nameEn={province.nameEn} />
  </React.Fragment>
)
