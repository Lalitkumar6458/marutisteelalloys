import React , { useState, useEffect }from 'react'
import Header from './Header'
import Footer from './Footer'
import TopInfo from './TopInfo'
import ScrollTop from './ScrollTop'
import Whatsappbtn from './Whatsappbtn'
import Head from 'next/head'
const Layout = ({children}) => {
  const [showTopBar, setShowTopBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 110) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>
          Maruti Steel alloys is leading Pipe, Tube, Stainless Steel Pipe, Stainless
          Steel Tube, Pipe Fittings, Flanges, Socketweld Fittings, Screwed
          Fittings, Fasteners, Valves Stockist &amp; Supplier in India.
        </title>
        <meta
          name="keywords"
          content="pipe supplier in mumbai, tube stockist in pune, stainless steel pipe supplier, stainless steel tube stockist, buttweld fittings supplier in rajkot, flanges stockist in gujarat, socketweld fittings exporter in uae, screwed fittings supplier in india, fasteners supplier in india, valves stockist &amp; supplier in india"
        ></meta>
        <meta
          name="description"
          content="Maruti Steel Alloys is leading Pipe, Tube, Stainless Steel Pipe, Stainless Steel Tube, Pipe Fittings, Flanges, Socketweld Fittings, Screwed Fittings, Fasteners, Valves Stockist &amp; Supplier in India."
        ></meta>
      </Head>
      <div className="">
        <TopInfo />
        {showTopBar ? (
          <div className="">
            <Header fixed={true} />
          </div>
        ) : null}

        <Header fixed={false} />

        {children}
        <Footer />
        <ScrollTop />
        <Whatsappbtn />
      </div>
    </>
  );
}

export default Layout