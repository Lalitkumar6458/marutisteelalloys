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