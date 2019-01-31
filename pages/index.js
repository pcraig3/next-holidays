import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <h1>Provinces</h1>
    <p>
      You are from{' '}
      <Link href="/provinces">
        <a>Ontario</a>
      </Link>
      .
    </p>
  </Layout>
)

export default Index
