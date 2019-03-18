import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import DateHtml from '../components/DateHtml'
import Highlight from '../components/Highlight'
import BottomLink from '../components/BottomLink'
import { relativeDate } from '../utils/dates.js'
import { space2Nbsp } from '../utils/strings.js'
import apiUrl from '../utils/apiUrl'

const getNextHoliday = holidays => {
  const today = new Date()
  for (const holiday of holidays) {
    if (today < new Date(holiday.date)) {
      return holiday
    }
  }
  return holidays[0]
}

const Federal = ({ data: holiday }) => (
  <Layout title={'Federal employees’ next public holiday'}>
    <h1>
      As a federal employee, your next public holiday is{' '}
      {space2Nbsp(holiday.nameEn)}, on{' '}
      <Highlight>
        <DateHtml dateString={holiday.date} />
      </Highlight>
      .
    </h1>
    <h2>{relativeDate(holiday.date)}</h2>

    <BottomLink href={'/'} linkText={'Actually, I have a normal job.'} />
  </Layout>
)

Federal.getInitialProps = async function() {
  let data = {}

  try {
    const res = await fetch(`${apiUrl}/v1/holidays?federal=true`)
    data = await res.json()
  } catch (e) {
    return { data }
  }

  data = getNextHoliday(data.holidays)

  return { data }
}

Federal.propTypes = {
  data: PropTypes.object,
}

export default Federal
