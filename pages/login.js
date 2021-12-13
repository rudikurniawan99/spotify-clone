import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="https://links.papareact.com/9xl" className="w-52 mb-8" alt="" />

      {Object.values(providers).map((provider) => (
        <div
          key={provider.id} 
        >
          <button 
            className="px-3 py-1 bg-green-500 text-white rounded-md"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })} 
          >Login With {provider.name}</button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps(){

  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}
