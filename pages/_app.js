import Layout from '@/components/Base/Layout'
import '@/styles/globals.css'
import Loader from '@/components/Base/Loader'
import { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
export default function App({ Component, pageProps }) {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setLoading(false)
  },[])
  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Maruti Steel alloys is leading Pipe, Tube, Stainless Steel Pipe, Stainless
          Steel Tube, Pipe Fittings, Flanges, Socketweld Fittings, Screwed
          Fittings, Fasteners, Valves Stockist &amp; Supplier in India.
        "
        />
        <meta
          property="og:description"
          content="Maruti Steel Alloys is leading Pipe, Tube, Stainless Steel Pipe, Stainless Steel Tube, Pipe Fittings, Flanges, Socketweld Fittings, Screwed Fittings, Fasteners, Valves Stockist &amp; Supplier in India."
        />
        <meta
          property="og:image"
          content={require("../public/Images/logo.png")}
        />
        {/* You can add more Open Graph tags if needed */}
      </Helmet>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
