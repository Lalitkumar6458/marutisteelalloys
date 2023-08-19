import PageHeading from '@/components/Base/PageHeading'
import React from 'react'
import img from "../public/Images/contactimg.webp"
import {FaPhoneVolume} from "react-icons/fa"
import {HiOutlineMailOpen} from "react-icons/hi"
import { websiteData } from '@/public/constantData'
const contact = () => {
  return (
    <div className=''>
    <PageHeading heading="Contact Us" img={img} bredcurm="Contact Us"/>

    <div className='mt-[40px] mb-[40px] px-[5%]'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
    <div className='shadow-boxshadow flex flex-col items-center justify-center p-3 relative'>
     <FaPhoneVolume className='p-[8px] text-[2.3rem] top-[-20px] absolute left-[50%] translate-x-[-50%] bg-dark-pink text-white rounded'/>
    <h2 className='mt-2 text-[1.5rem] font-poppins font-semibold text-dark-cl'>Office No</h2>
    <div className='flex items-center flex-col h-[80px] justify-center'>
    <p className='text-[1rem] font-Roboto font-medium mt-1'>+91 22 6639 4964</p>
    </div>
    </div>
    <div className='shadow-boxshadow flex flex-col items-center justify-center p-3 relative'>
    <FaPhoneVolume className='p-[8px] text-[2.3rem] top-[-20px] absolute left-[50%] translate-x-[-50%] bg-dark-pink text-white rounded'/>
    <h2 className='mt-2 text-[1.5rem] font-poppins font-semibold text-dark-cl'>Phone Number</h2>
    <div className='flex items-center flex-col h-[80px]'>
    <h3 className='text-[1rem] font-Roboto text-gray-800'>{websiteData.contactInfo.contactPerson[0]}</h3>
    <p className='text-[1rem] font-Roboto font-medium mt-1'>+91 {websiteData.contactInfo.mobileNo[0]}</p>
    <p className='text-[1rem] font-Roboto font-medium mt-1' >+91 {websiteData.contactInfo.mobileNo[1]}</p>
    </div>

    </div>
    <div className='shadow-boxshadow flex flex-col items-center justify-center p-3 relative'>
    <HiOutlineMailOpen className='p-[8px] text-[2.3rem] top-[-20px] absolute left-[50%] translate-x-[-50%] bg-dark-pink text-white rounded'/>
    <h2 className='mt-2 text-[1.5rem] font-poppins font-semibold text-dark-cl'>Email</h2>
    <div className='flex items-center flex-col h-[80px] justify-center'>
    <p className='text-[1rem] font-Roboto font-medium mt-1'>{websiteData.contactInfo.email[0]}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default contact