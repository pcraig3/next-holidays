import PropTypes from 'prop-types'
import Layout from '../components/Layout'

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
  return require('../data/provinces.json')
}

Index.propTypes = {
  provinces: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Index
