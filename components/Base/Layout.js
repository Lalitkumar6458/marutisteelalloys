import React , { useState, useEffect }from 'react'
import Header from './Header'
import Footer from './Footer'
import TopInfo from './TopInfo'
import ScrollTop from './ScrollTop'
import Whatsappbtn from './Whatsappbtn'
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
    <title>Maruti Steel Alloys- Comprehensive Range of Stainless Steel Products</title>
    <meta name="description" content="Maruti steel alloys is the most acclaimed manufacturer, exporter, distributor and supplier of industrial Tubing, Pipe, Bar, Round Bar, Bright Finish Bar,dairy fittings, pipe fittings with required test certificates, pipe supplier in Mumbai, tube stockist in Pune, stainless steel pipe supplier, stainless steel tube stockist, buttweld fittings supplier in Rajkot, flanges stockist in Gujarat, socketweld fittings exporter in UAE, screwed fittings supplier in India, fasteners supplier in India, valves stockist & supplier in India" />

    <meta name="keywords" content="maruti, maruti steel, maruti metal, maruti steel alloys, maruti alloys, dairy fittings, pharma fittings, Stainless Steel Pipe, SS Pipe Fittings, API 5l Grade B Pipe, Inconel 600 Pipe, Inconel 601 Pipe, Inconel 625 Pipe, Incoloy 800 Pipe, Incoloy 825 Pipe, Inconel 600 Tube, Inconel 601 Tube, Inconel 625 Tube, Incoloy 800 Tube, Incoloy 825 Tube, Hastelloy C276 Pipe, Hastelloy C276 Tube, Inconel 600 Tubing, Inconel 601 Tubing, Inconel 625 Tubing, Inconel Flanges, inconel 600 flanges, inconel 625 flanges, Hastelloy Flanges, Hastelloy c276 flange, Hastelloy c22 flanges, API 5L GR. B EFW Line Pipe, API 5L GR. B ERW Pipe, API 5L GR. B HSAW Pipe, API 5L GR. B IBR Pipe, API 5L GR. B LSAW Pipe, API 5L GR. B SAW Pipe, API 5L GR. B Seamless Pipe, API 5L GR. B Welded Pipe, API Steel Brand Pipe, Sour Service Line Pipe, Offshore Line Pipe, API 5L X42 Seamless Pipe, API 5L X46 Seamless Pipe, API 5L X52 Seamless Pipe, API 5L X56 Seamless Pipe, API 5L X60 Seamless Pipe, API 5L X65 Seamless Pipe, API 5L X70 Seamless Pipe, API 5L GR.B PSL 2 Pipe, API 5L X42 PSL2 Pipe, API 5L X46 PSL2 Pipe, Stainless Steel Pipe Fittings, ss buttweld fittings, ss forged fittings manufacturers India, Stainless Steel Flanges, ss blind flange, ss flanges price, SS seamless pipe, Stainless steel seamless tube price, Stainless steel 304 pipe, Stainless Steel 304 tube manufacturers, SS 304l tube manufacturers, Stainless Steel 304L pipe, 316 stainless tube supplier, SS 316l pipe, Stainless steel 317 tube suppliers, 321 stainless steel pipe Manufacturers, 310 stainless steel pipe Manufacturers, SS 446 pipe, ss 904l pipe manufacturer, SS 347 pipe Manufacturer, duplex steel 2205 pipe, ASTM A106 Grade B Seamless Pipe, ASTM A106 Grade B Pipe, Inconel Pipe Fittings, Inconel 600 Pipe Fittings, Inconel 625 Pipe fittings, Hastelloy Pipe fittings, Hastelloy c276 pipe fittings, Hastelloy c22 pipe fittings, 317 SS pipe, 316l ss tubing suppliers, stainless steel 316l tube price, ss 316 tubing, Stainless Steel 316 seamless pipe price, ss 304 seamless tube price, 304L stainless steel tubing price list, alloy steel pipe fittings, alloy steel buttweld fittings, alloy steel forged fittings manufacturers, carbon steel pipe fittings, carbon steel buttweld fittings, carbon steel forged fittings, Alloy Steel flanges, Alloy Steel Forged Steel Flanges manufacturers, ASTM A182 F22 flanges, Carbon steel flanges, carbon steel blind flanges, carbon steel threaded flanges, Stainless steel pipe manufacturers in India, SS 317 tubing price, Stainless steel 317L pipe manufacturers, SS 317L seamless pipe suppliers, Stainless Steel 317L tube price, ss 321 pipe, 321 stainless steel tubing price, ss 310 pipe, 310 stainless steel tubing price, ss 410 pipe, stainless steel 410 tube manufacturer, 410 stainless steel pipe prices, stainless steel 446 suppliers, 446 stainless steel tube price, 347 stainless steel tubing Suppliers, stainless steel 347 tube price, 904l ss tubing suppliers, ss 904l tubes price, astm a333 pipe manufacturers, alloy steel a333 grade b pipe, alloy steel a333 pipe price, 2205 duplex stainless steel pipe manufacturers, 2205 duplex stainless steel tube price, super duplex stainless steel pipe manufacturers, 2507 super duplex pipe suppliers, super duplex steel 2507 tube price, inconel tube manufacturers, alloy 625 tubes suppliers, inconel tubing price list, hastelloy Pipe manufacturer, hastelloy tubing suppliers, hastelloy tube price in INDIA, monel tube manufacturer, monel 400 pipe suppliers, monel 400 pipe price list, hastelloy c276 pipe manufacturer, hastelloy c22 tube suppliers, Alloy c276 pipe price, hastelloy b2 pipe manufacturer, hastelloy c276 tubing suppliers, Alloy b2 tube price in India, Inconel 600 pipe Manufacturer, inconel 601 tube suppliers, alloy 600 tube price list, inconel 718 tubing Manufacturers, alloy 718 pipe suppliers, inconel 718 tube price, INCOLOY 800 PIPE MANUFACTURER, INCOLOY 825 TUBE SUPPLIERS, ALLOY 825 PIPE PRICE, chrome moly tubing Manufacturers, chrome moly tube price, 4130 chromoly Pipe manufacturer & suppliers, p22 alloy steel pipe Manufacturers, p22 seamless pipe Suppliers, p22 pipe price in India, astm a106 grade b pipe Suppliers, a106 grade b seamless pipe manufacturer, a106 grade b pipe price list, astm a335 p91 pipe Manufacturers, p91 pipe suppliers, a335 p91 pipe price, astm a333 pipe manufacturer, astm a333 grade b pipe suppliers, a333 pipe price list, astm a53 grade b pipe manufacturers, pipe astm a53 grade b suppliers, astm a53 grade b pipe price, API 5L X52 PSL2 Pipe, API 5L X56 PSL2 Pipe, API 5L X60 PSL2 Pipe, API 5L X65 PSL2 Pipe, API 5L X70 PSL2 Pipe, API 5L X80 PSL2 Pipe, API 5L GRADE B PIPE suppliers, API 5L GRADE B PIPE manufacturer, API 5L GRADE B PIPE price, API 5L ERW pipe Manufacturer, API 5L erw pipe suppliers, API 5L ERW pipe price, api 5l seamless pipe suppliers, api 5l seamless pipe manufacturer, api 5l seamless pipe price, API 5lx42 pipe Manufacturer, API 5lx52 pipe suppliers, API 5lx42 pipe price, API 5L X46 Pipe manufacturer, API 5L X46 Pipe manufacturer & suppliers, X46 Pipe price list, api 5l x52 pipe manufacturer, api 5l x52 pipe suppliers, API 5l x52 pipe price, API 5L X56 Pipe Manufacturer & Suppliers, API 5L X56 Pipe Manufacturer, API 5l X56 Pipe price, api 5l x65 pipe Suppliers, api 5l x65 pipe Manufacturer, API 5l x65 pipe price list, api 5l x70 pipe manufacturer, api 5l x70 pipe suppliers, API 5l x70 pipe price in India, API 5l x80 pipe manufacturer, API 5l X80 pipe Suppliers, API 5l x80 pipe price India, pipe supplier in Mumbai, tube stockist in Pune, stainless steel pipe supplier, stainless steel tube stockist, buttweld fittings supplier in Rajkot, flanges stockist in Gujarat, socketweld fittings exporter in UAE, screwed fittings supplier in India, fasteners supplier in India, valves stockist & supplier in India" />
    

    <meta name="author" content="www.marutisteelalloys.com"/>


    <meta property="og:title" content="Maruti Steel Alloys- Comprehensive Range of Stainless Steel Products" />
    <meta property="og:description" content="Maruti steel alloys is the most acclaimed manufacturer, exporter, distributor and supplier of industrial Tubing, Pipe, Bar, Round Bar, Bright Finish Bar, dairy fittings, pipe fittings with required test certificates, pipe supplier in Mumbai, tube stockist in Pune, stainless steel pipe supplier, stainless steel tube stockist, buttweld fittings supplier in Rajkot, flanges stockist in Gujarat, socketweld fittings exporter in UAE, screwed fittings supplier in India, fasteners supplier in India, valves stockist & supplier in India" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.marutisteelalloys.com" />
    <meta property="og:image" content="https://www.marutisteelalloys.com/Images/About/homeAbout.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Maruti Steel Alloys" />


    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Maruti Steel Alloys- Comprehensive Range of Stainless Steel Products" />
    <meta name="twitter:description" content="Maruti steel alloys is the most acclaimed manufacturer, exporter, distributor and supplier of industrial Tubing, Pipe, Bar, Round Bar, Bright Finish Bar, dairy fittings, pipe fittings with required test certificates, pipe supplier in Mumbai, tube stockist in Pune, stainless steel pipe supplier, stainless steel tube stockist, buttweld fittings supplier in Rajkot, flanges stockist in Gujarat, socketweld fittings exporter in UAE, screwed fittings supplier in India, fasteners supplier in India, valves stockist & supplier in India" />
    <meta name="twitter:image" content="https://www.marutisteelalloys.com/Images/About/homeAbout.jpg" />
    <meta name="twitter:site" content="@MarutiSteelAlloys" />
    <link rel="canonical" href="https://www.marutisteelalloys.com" />
  </Head>

  <div className=''>
  <TopInfo/>
  {
   showTopBar?<div className=''>
  <Header fixed={true}/>
   </div>:null
  }

  <Header fixed={false}/>

  {children}
  <Footer/>
  <ScrollTop/>
  <Whatsappbtn/>
  </div>
    </>
  
  )
}

export default Layout