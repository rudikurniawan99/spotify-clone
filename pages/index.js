import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gray-900">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <div className="w-1/5">
          <Sidebar/>
        </div>
        <div className="w-full">
          <Center/>
        </div>
        {/* main pages */}
      </main>
      {/* player */}
    </div>
  )
}
