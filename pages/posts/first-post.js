import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <main>
        <h1>First Post</h1>
        <h2>Link to <Link href="/"><a>Home</a></Link></h2>
      </main>
    </Layout>
  )
}
