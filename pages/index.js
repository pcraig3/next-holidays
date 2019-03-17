import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import apiUrl from '../utils/apiUrl'

const Index = ({ provinces }) => (
  <Layout title="When is your next holiday">
    <h1>When is your next holiday?</h1>
    <p className="bottom-margin">
      <a href="/federal">I am a federal employee</a>.
    </p>
    <p>I’m not a federal employee. I live in:</p>
    <ul>
      {provinces.map(province => (
        <li key={province.id}>
          <a href={`/provinces/${province.id}`}>{province.nameEn}</a>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  let data = { provinces: [] }

  try {
    const res = await fetch(`${apiUrl}/v1/provinces`)
    data = await res.json()
  } catch (e) {
    // in this case, we will still return an empty data object
  }

  return data
}

Index.propTypes = {
  provinces: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Index
