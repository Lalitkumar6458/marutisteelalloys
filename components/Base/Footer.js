import Link from 'next/link'
import React from 'react'
import {AiOutlineGoogle} from "react-icons/ai"
import { websiteData } from '@/public/constantData'
import {FaRss,FaFacebookF,FaTwitter,FaLinkedinIn,FaEnvelope,FaPhone,FaAngleDoubleRight, FaWhatsapp} from "react-icons/fa"
const Footer = () => {
  const list1=[
    {
        name:"SS,SMO 254 SCRAP",
        link:'/'
    },
    {
        name:"SS,ALLOYS 20 SCRAP",
        link:'/'
    },
    {
        name:"SS,904L SCRAP",
        link:'/'
    },
    {
        name:"SS,310 SCRAP",
        link:'/'
    },
    {
        name:"SS,316L SCRAP",
        link:'/'
    },
    {
        name:"SS,304L SCRAP",
        link:'/'
    },
    {
        name:"SS,321 SCRAP",
        link:'/'
    },
    {
        name:"SS,347 SCRAP",
        link:'/'
    }
   
]
const list2=[
  {
    name:"Pipe",
    link:""
  },
  {
    name:"Tubes",
    link:""
  },
  {
    name:"Pipe Fittings",
    link:""
  },
  {
    name:"Flanges",
    link:""
  },
  {
    name:"Fasteners",
    link:""
  },
  {
    name:"Sheet & Plate",
    link:""
  },
  {
    name:"COILS & STIRPS",
    link:""
  },
  {
    name:"Valves",
    link:""
  }
]
const list3=[
  {
    name:"Inconel Alloys",
    link:"",
  },
  {
    name:"Monel Alloys",
    link:"",
  },
  {
    name:"Hastelloy",
    link:"",
  },
  {
    name:"Duplex Alloys",
    link:"",
  },
  {
    name:"Super Duplex Alloys",
    link:"",
  },
  {
    name:"Cupro Nickel Alloys",
    link:"",
  },
  {
    name:"SMO 254",
    link:"",
  },
  {
    name:"Alloy 20",
    link:"",
  },
  {
    name:"Titanium",
    link:"",
  },
]
 const handleEmailClick = () => {

    let email=websiteData.contactInfo.email[0]
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`;
    window.open(url);
  };
  const handlePhoneClick = () => {
  let  phoneNumber=`+91${websiteData.contactInfo.mobileNo[0]}`
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `tel:${formattedPhoneNumber}`;
    window.location.href = url;
  };
  const handleWhatsAppClick = () => {
    let  phoneNumber=`+91${websiteData.contactInfo.mobileNo[0]}`
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const url = `https://wa.me/${formattedPhoneNumber}`;
    window.open(url, '_blank');
  };
  const handleInsta=()=>{
   
  }
  return (
   <div className='w-full bg-footerBg px-[5%] pt-[5%] pb-4 rounded-t-[30px]'>
   <div className='grid grid-cols-1 max-[767px]:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:gap-y-4 text-white gap-3 '>
   <div className='pr-5'>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>About Us</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <p className="font-Oswald text-[0.8rem]">
   {websiteData.footerData.about}
   </p>
   <div className='mt-3'>
   <span className='flex items-center gap-2 cursor-pointer' onClick={handleEmailClick}><FaEnvelope className='text-mainRed' /> <strong>{websiteData.contactInfo.email[0]}</strong> </span>
   <span className='flex items-center gap-2 mt-1 cursor-pointer'  onClick={handlePhoneClick} ><FaPhone className='text-mainRed'/> <strong>+91 {websiteData.contactInfo.mobileNo[0]} / {websiteData.contactInfo.mobileNo[1]}</strong></span>

   </div>
   <div className="mt-5">
   <ul className='flex items-center gap-2'>
   <li className='p-2 bg-white text-mainRed rounded-full mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125' onClick={handleEmailClick}><Link href="/" className="fa-brands fa-google"><AiOutlineGoogle/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-full mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'  onClick={handleInsta}><Link href="/" className="fa-solid fa-rss"><FaRss/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-full mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'  onClick={handleInsta}><Link href="/" className="fa fa-facebook"><FaFacebookF/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-full mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125' onClick={handleWhatsAppClick}><Link href="/" className="fa fa-twitter"><FaWhatsapp/></Link></li>
   <li  className='p-2 bg-white text-mainRed rounded-full mr-2 hover:bg-mainRed hover:text-white cursor-pointer transition-all duration-700 hover:scale-125'  onClick={handleInsta}><Link href="/" className="fa fa-linkedin"><FaLinkedinIn/></Link></li>
</ul>  
   </div>
 
   </div>

   <div className=''>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>Our Products</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <ul>
   {
    list2.map((item)=>{
      return(
        <li className=' hover:translate-x-5 transition-all duration-700 hover:text-mainRed'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
      )
    })
   }
 
   </ul>
   </div>
   <div className=''>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>Special Alloys</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <ul>
   {
    list3.map((item)=>{
      return(
        <li className=' hover:translate-x-5 transition-all duration-700 hover:text-mainRed'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
      )
    })
   }
 
   </ul>
   </div>
   <div className=''>
   <div className='mb-3'>
   <h1 className='text-[1.4rem] font-exo uppercase'>STAINLESS STEEL</h1>
   <div className='h-1 rounded bg-mainRed w-20'></div>
   </div>
   <ul>
   {
    list1.map((item)=>{
      return(
        <li className=' hover:translate-x-5 transition-all duration-700 hover:text-mainRed'><Link href={item.link} className='flex items-center gap-2 font-Oswald mb-1'><FaAngleDoubleRight/> {item.name}</Link></li>
      )
    })
   }
 
   </ul>

   </div>
   </div>
   <div className='h-[1px] w-full bg-mainRed mt-5'>

   </div>
   <div  className='font-Oswald flex items-start justify-center text-white gap-2 mt-3'>
   <Link href="/" className='hover:text-mainRed'>Home</Link>
 |
   <Link href="/about" className='hover:text-mainRed'>About Us</Link>
  |

   <Link href="/" className='hover:text-mainRed'>Products</Link>|
   <Link href="/" className='hover:text-mainRed'>Quality</Link>|
   <Link href="/contact" className='hover:text-mainRed'>Contact Us</Link>

   </div>

   <div className=''>
   <p className='text-center text-white font-poppins mt-5'>{websiteData.footerData.footerBottom}</p>
   </div>
   <div className='text-white font-Oswald text-center mt-5'>
   © {new Date().getFullYear()}  {websiteData.name}. All Right Reserved,  Design And Developed By <Link className='text-blue-400 text-[1.4rem]' href="https://www.linkedin.com/in/lalit-kumar-845a2123a"
                    target="_blank">Lalit Kumar</Link>
   </div>
   </div>
  )
}

export default Footer