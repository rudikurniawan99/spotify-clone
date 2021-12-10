import Head from 'next/head'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:w-1/4">
          <Sidebar/>
        </div>
        {/* main pages */}
      </main>
      {/* player */}
    </div>
  )
}