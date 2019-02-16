import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import ProvinceFound from '../components/ProvinceFound'
import ProvinceNotFound from '../components/ProvinceNotFound'

const Provinces = ({ data, province }) => (
  <Layout
    title={
      data.error
        ? `${province} not found`
        : `${data.province.nameEn}’s next holiday`
    }
  >
    {data.error ? (
      <ProvinceNotFound errorMessage={data.error.message} />
    ) : (
      <ProvinceFound province={data.province} />
    )}
  </Layout>
)

Provinces.getInitialProps = async function(props) {
  let data = {}
  let province = props.query.province

  const notFound = { data, province }

  try {
    const res = await fetch(`http://35.222.86.86:8080/v1/provinces/${province}`)
    data = await res.json()
  } catch (e) {
    return notFound
  }

  return { data, province }
}

Provinces.propTypes = {
  data: PropTypes.object,
  province: PropTypes.string,
}

export default Provinces
