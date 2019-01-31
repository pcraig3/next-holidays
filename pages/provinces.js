import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import ProvinceFound from '../components/ProvinceFound'
var format = require('date-fns/format')

const ProvinceNotFound = ({ province }) => (
  <React.Fragment>
    <h1>Whoops</h1>
    <p>Nothing found for ‘{`${province}`}’</p>
  </React.Fragment>
)

const Provinces = ({ found, data, province }) => (
  <Layout
    title={
      data.province
        ? `${data.province.nameEn}’s next holiday`
        : `${province} not found`
    }
  >
    {found ? (
      <ProvinceFound province={data.province} />
    ) : (
      <ProvinceNotFound province={province} />
    )}
  </Layout>
)

Provinces.getInitialProps = async function(props) {
  let data = {}
  let province = 'ON'

  const notFound = { found: false, data, province }

  try {
    const res = await fetch(`http://35.222.86.86:8080/v1/provinces/${province}`)
    data = await res.json()
  } catch (e) {
    return { ...notFound, province }
  }

  return { found: true, data, province }
}

export default Provinces
