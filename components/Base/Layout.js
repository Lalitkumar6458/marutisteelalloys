import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TopInfo from './TopInfo'
const Layout = ({children}) => {
  return (
   <div className=''>
   <TopInfo/>
   <Header/>
   {children}
   <Footer/>
   </div>
  )
}

export default Layout