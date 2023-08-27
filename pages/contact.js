import PageHeading from '@/components/Base/PageHeading'
import React,{useState} from 'react'
import img from "../public/Images/contactimg.webp"
import {FaPhoneVolume} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
import {HiOutlineMailOpen} from "react-icons/hi"
import { websiteData } from '@/public/constantData'
import { motion, useScroll } from "framer-motion";
import ContactForm from '@/components/Base/ContactForm'
const contact = () => {

  const handleEmailClick = () => {

    let email=websiteData.contactInfo.email
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = (phone) => {
  let  phoneNumber="+91"+websiteData.contactInfo.mobileNo[0]
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };


  



  return (
    <div className=''>
    <PageHeading heading="Contact Us" img={img} bredcurm="Contact Us"/>

    <div className='mt-[40px] mb-[40px] px-[5%]'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4'>
    <div className='shadow-boxshadow flex flex-col items-center justify-center p-3 relative'>
     <FaPhoneVolume className='p-[8px] text-[2.3rem] top-[-20px] absolute left-[50%] translate-x-[-50%] bg-dark-pink text-white rounded'/>
    <h2 className='mt-2 text-[1.5rem] font-poppins font-semibold text-dark-cl'>Office No</h2>
    <div className='flex items-center flex-col h-[80px] justify-center'>
    <p className='text-[1rem] font-Roboto font-medium mt-1'>+91 {websiteData.contactInfo.officeNo[0]}</p>
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
    <div className='shadow-boxshadow flex flex-col items-center justify-center p-3 relative'>
    <FaLocationDot className='p-[8px] text-[2.3rem] top-[-20px] absolute left-[50%] translate-x-[-50%] bg-dark-pink text-white rounded'/>
    <h2 className='mt-2 text-[1.5rem] font-poppins font-semibold text-dark-cl'>Address</h2>
    <div className='flex items-center flex-col h-[80px] justify-center'>
    <p className='text-[1rem] font-Roboto font-medium mt-1 text-center'>{websiteData.contactInfo.address}</p>
    </div>
    </div>
    </div>

<div className='grid grid-cols-1  md:grid-cols-2 gap-4 mt-[40PX]'>
<div className=''>
<ContactForm heading={true}/>
</div>
<div className='rounded-md'>
<iframe className='w-full h-full rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120749.13106540719!2d72.74429747709927!3d18.957476694362207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfab9a1b3471%3A0x5fb0b6ff83367ae7!2sMaruti%20steel%20Alloys!5e0!3m2!1sen!2sin!4v1692512633641!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

</div>

    </div>
    </div>
  )
}

export default contact