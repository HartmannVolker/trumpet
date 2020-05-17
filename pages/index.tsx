import Link from 'next/link'
import Layout from '../components/shared/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ['index'],
})
export default IndexPage
