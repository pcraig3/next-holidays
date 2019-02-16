import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const Index = ({ provinces }) => (
  <Layout title="When is your next holiday">
    <h1>When is your next holiday?</h1>
    <ul>
      {provinces.map(province => (
        <li key={province.id}>
          <a href={`/provinces/${province.id}`}>{province.nameEn}</a>
        </li>
      ))}
    </ul>
    <hr />
    <ul>
      <li>
        <a href="/federal">I work for the federal government</a>
      </li>
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  let data = {}

  try {
    const res = await fetch('http://35.222.86.86:8080/v1/provinces')
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
