import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jplus Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Test Completed!" />
        <p className="description">
          Data recorded
        </p>
      </main>

      <Footer />
    </div>
  )
}
