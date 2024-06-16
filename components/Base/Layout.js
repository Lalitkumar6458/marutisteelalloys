import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import TopInfo from './TopInfo';
import ScrollTop from './ScrollTop';
import Whatsappbtn from './Whatsappbtn';
import Head from 'next/head';

const Layout = ({ children }) => {
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


      <div>
        <TopInfo />
        {showTopBar && <Header fixed={true} />}
        {!showTopBar && <Header fixed={false} />}
        {children}
        <Footer />
        <ScrollTop />
        <Whatsappbtn />
      </div>
    </>
  );
};

export default Layout;
