import Layout from '@/components/Base/Layout'
import '@/styles/globals.css'
import Loader from '@/components/Base/Loader'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setLoading(false)
  },[])
  return loading ? (
    <Loader />
  ) : (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
