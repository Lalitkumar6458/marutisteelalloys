import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/Home/HeroSection'
import AboutHome from '@/components/Home/AboutHome'
import OurProducts from '@/components/Home/OurProducts'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import IndustriesServe from '@/components/Home/IndustriesServe'
import ContactUs from '@/components/Home/ContactUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
  <HeroSection/>
  <AboutHome/>
  <OurProducts/>
  <WhyChooseUs/>
  <IndustriesServe/>
  <ContactUs/> 
  
    </main>
  )
}
